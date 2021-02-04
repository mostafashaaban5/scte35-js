
const { Scte35DecoderFactory } = require('scte35decoder').scte35decoder;

const B64_STRING = '/DA1AAAAAAAAAP/wBQb/SMG+pgAfAh1DVUVJAAAAAX+/AQ5FUDAzMjU2ODEyMDAyNwEBATMCzNc=';
const HEX_STRING = '0xFC303500000000000000FFF00506FF48C1BEA6001F021D43554549000000017FBF010E45503033323536383132303032370101013302CCD7';

/**
 * Parse Scte Message From Base64 String
 */
const scteMessageFromBase64String = (base64String) => {
    const b64Decoder = Scte35DecoderFactory.createB64Decoder();
    const scteDecoder = Scte35DecoderFactory.createScteDecoder();
    return scteDecoder.decodeFromB64(base64String, b64Decoder);
}

/**
 * Parse Scte Message From Hex String
 */
const scteMessageFromHexString = (hexString) => {
    const scteDecoder = Scte35DecoderFactory.createScteDecoder();
    return scteDecoder.decodeFromHex(hexString);
}

console.log('from Base64 String: ', scteMessageFromBase64String(B64_STRING));
console.log('from Hex String: ', scteMessageFromHexString(HEX_STRING));
