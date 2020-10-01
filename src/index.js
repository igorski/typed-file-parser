/**
 * Whether the environment supports use of typed-file-parser
 */
export function isSupported( scope = window ) {
    return [
        'FileReader', 'atob', 'Uint8Array'
    ].every( fn => typeof scope[fn] === 'function' );
};

/**
 * Enumeration of all supported types. Note that there is some duplication
 * in type as they basically specify the same byte size and some variants
 * are meaningless in JavaScript. Their definition functions basically to
 * accurately describe the intent of the file format being read.
 */
const TYPE_NAMES = [
    'CHAR',
    'BYTE', 'INT8', 'UINT8',
    'SHORT', 'INT16', 'UINT16',
    'INT24', 'UINT24',
    'INT32', 'UINT32', 'LONG', 'ULONG', 'FLOAT', 'UFLOAT', 'FLOAT32', 'UFLOAT32',
    'LONGLONG', 'ULONGLONG', 'DOUBLE', 'UDOUBLE', 'FLOAT64', 'UFLOAT64',
];
export const types = Object.freeze( TYPE_NAMES.reduce(( acc, name ) => {
    acc[ name ] = name;
    return acc;
}, {}));

/**
 * Parse a byte array and map the data starting from the given offset to an Object
 * with given structure. The data is read for as long as there is data available in
 * the byteArray and the structure hasn't been filled yet.
 *
 * This method returns a structure containing:
 * a data Object which is a filled data structure, can be null when parsing failed
 * a numerical end offset which indicates at what offset in given file the
 * structure's definition has ended. This can be used for subsequent read operations
 * where binary data is retrieved.
 *
 * @param {Uint8Array} byteArray
 * @param {Object} structure key/values where key is the target name of the
 *                 property and the value is one of the enumerated types listed above.
 * @param {Number=} offset to read from, optional and defaults to 0
 * @return {{
 *     data: Object,
 *     end: Number
 * }}
 */
export function parseByteArray( byteArray, structureDefinition = {}, offset = 0 ) {
    isLittleEndian(); // lazily perform endianness check

    const total         = byteArray.length;
    const structureKeys = Object.keys( structureDefinition );
    const totalKeys     = structureKeys.length;
    let keyIndex        = 0;

    const out = {
        data: {},
        end: offset
    };
console.log(byteArray.slice(0, total ));
    let i = Math.max( 0, offset );
    for ( i; i < total && keyIndex < totalKeys; ) {
        const key            = structureKeys[ keyIndex ];
        const typeDefinition = structureDefinition[ key ];
        const result = getDataForType( typeDefinition, byteArray, i );

        if ( result.value === undefined ) {
            out.error = true;
            return out; // failed to read data
        }

        out.data[ key ] = result.value;
        i = result.offset;
        ++keyIndex;
    }
    out.end = i;

    // TODO: count if end is equal to the expected size

    return out;
};

/**
 * Same as above, with the exception that the supplied data is base64 content
 */
export function parseBase64( base64, structureDefinition, offset ) {
    let byteArray;
    try {
        byteArray = Uint8Array.from( window.atob( base64.split( 'base64,' ).pop()), c => c.charCodeAt( 0 ));
    } catch {
        return NO_RESULT;
    }
    return parseByteArray( byteArray, structureDefinition, offset );
};

/**
 * Same as above, with the exception that it works directly on a given File.
 * Note this function is asynchronous as the File has to be read first. In case
 * the file could not be parsed, the Promise is rejected.
 */
export async function parseFile( fileReference, structureDefinition, offset = 0 ) {
    return new Promise( async ( resolve, reject ) => {
        let byteArray;
        try {
            byteArray = await fileToByteArray(
                fileReference, offset, getSizeForStructure( structureDefinition )
            );
        } catch {
            reject();
        }
        resolve( parseByteArray( byteArray, structureDefinition, offset ));
    });
};

/**
 * Converts given File to a ByteArray of requested size
 */
export async function fileToByteArray( fileReference, offset = 0, size = fileReference.size ) {
    const reader = new FileReader();
    return new Promise(( resolve, reject ) => {
        reader.onload = ({ target }) => {
            resolve( new Uint8Array( target.result ));
        }
        reader.onerror = reject;
        reader.readAsArrayBuffer( fileReference.slice( offset, Math.min( fileReference.size, offset + size )));
    });
}

/* internal methods */

/**
 * We'll be using TypedArrays meaning read data will be converted to the
 * endianness of the environment. Calculate the endianness upfront.
 */
let _isLittleEndian = undefined;
function isLittleEndian() {
    if ( _isLittleEndian === undefined ) {
        const b = new ArrayBuffer( 4 );
        const a = new Uint32Array( b );
        const c = new Uint8Array (b );
        a[ 0 ]  = 0xdeadbeef;

        _isLittleEndian = c[ 0 ] == 0xef;
    }
    return _isLittleEndian;
}

/**
 * The bread and butter of this library.
 * Read the byte(s) starting at given offset from given ByteArray
 * and return the formatted data type.
 */
function getDataForType( typeDefinition, byteArray, offset ) {
    const out = {
        value: undefined,
        offset
    };

    const isList = Array.isArray( typeDefinition );
    const type   = isList ? typeDefinition[ 0 ] : typeDefinition;
    const length = isList ? typeDefinition[ 1 ] : 1;

    if ( offset + length >= byteArray.length ) {
        return out;
    }

    // note we duplicate between single and list based values to
    // omit the need for a slicing operation on the ByteArray
    switch ( type ) {
        default:
            return out;
        // 8-bit String type
        case types.CHAR:
            if ( length === 1 ) {
                out.value = String.fromCharCode( byteArray[ offset ].toString( 16 ));
            } else {
                out.value = [...byteArray.slice( offset, offset + length )].map( byte => String.fromCharCode( byte )).join( '' );
            }
            out.offset += length;
            break;
        // 8-bit Number types
        case types.BYTE:
        case types.INT8:
        case types.UINT8:
            if ( length === 1 ) {
                out.value = byteArray[ offset ];
            } else {
                out.value = [...byteArray.slice( offset, offset + length )];
            }
            out.offset += length;
            break;
        // 16-bit Number types
        case types.SHORT:
        case types.INT16:
        case types.UINT16:
            // we will need to combine two bytes into one value
            out.value = combineBytes( offset, length, 2, it => {
                return (byteArray[ it + 1 ] << 8) | byteArray[ it ];
            });
            out.offset += length * 2;
            break;
        // 24-bit Number types
        case types.INT24:
        case types.UINT24:
            // we will need to combine three bytes into one value
            out.value = combineBytes( offset, length, 3, it => {
                return (byteArray[ it + 2 ] << 16) | (byteArray[ it + 1 ] << 8) | byteArray[ it ];
            });
            out.offset += length * 3;
            break;
        // 32-bit Number types
        case types.INT32:
        case types.UINT32:
        case types.LONG:
        case types.ULONG:
        case types.FLOAT:
        case types.UFLOAT:
        case types.FLOAT32:
        case types.UFLOAT32:
            // we will need to combine four bytes into one value
            out.value = combineBytes( offset, length, 4, it => {
                return (byteArray[ it + 3 ] << 24) | (byteArray[ it + 2 ] << 16) | (byteArray[ it + 1 ] << 8) | byteArray[ it ];
            });
            out.offset += length * 4;
            break;
        // 64-bit Number types
        case types.LONGLONG:
        case types.ULONGLONG:
        case types.DOUBLE:
        case types.UDOUBLE:
        case types.FLOAT64:
        case types.UFLOAT64:
            // we will need to combine eight bytes into one value
            out.value = combineBytes( offset, length, 8, it => {
                return (byteArray[ it + 7 ] << 56) | (byteArray[ it + 6 ] << 48) | (byteArray[ it + 5 ] << 40) | (byteArray[ it + 4 ] << 32) | (byteArray[ it + 3 ] << 24) | (byteArray[ it + 2 ] << 16) | (byteArray[ it + 1 ] << 8) | byteArray[ it ];
            });
            out.offset += length * 8;
            break;
    }
    return out;
}

/**
 * Combine multiple bytes (defined by amount) from given offset
 * into the amount of values defined by length, where the value(s)
 * is/are transformed by supplied fn
 */
function combineBytes( offset, length, amount, fn ) {
    const isList = length > 1;
    const max    = offset + ( length * amount );

    let value = isList ? [] : 0;
    for ( let i = offset; i < max; i += amount ) {
        const combinedValue = fn( i );
        if ( isList ) {
            value.push( combinedValue );
        } else {
            value = combinedValue;
        }
    }
    return value;
}

/**
 * Calculates the size in bytes for given structure
 */
function getSizeForStructure( structureDefinition ) {
    let size = 0;
    Object.values( structureDefinition ).forEach( typeDefinition => {
        const isList = Array.isArray( typeDefinition );
        const type   = isList ? typeDefinition[ 0 ] : typeDefinition;
        const length = isList ? typeDefinition[ 1 ] : 1;

        switch ( type ) {
            case types.CHAR:
            case types.BYTE:
            case types.INT8:
            case types.UINT8:
                size += length;
                break;
            case types.SHORT:
            case types.INT16:
            case types.UINT16:
                size += ( length * 2 );
                break;
            case types.INT24:
            case types.UINT24:
                size += ( length * 3 );
                break;
            case types.INT32:
            case types.UINT32:
            case types.LONG:
            case types.ULONG:
            case types.FLOAT:
            case types.UFLOAT:
            case types.FLOAT32:
            case types.UFLOAT32:
                size += ( length * 4 );
                break;
            case types.LONGLONG:
            case types.ULONGLONG:
            case types.DOUBLE:
            case types.UDOUBLE:
            case types.FLOAT64:
            case types.UFLOAT64:
                size += ( length * 8 );
                break;
            default:
                throw new Error(`Unsupported date type ${type}`);
        }
    });
    return size;
}
