import * as nacl from "tweetnacl";
import axios from "axios";
import  'fast-text-encoding'


const encoder = new TextEncoder
const defaultPublicKey = "ae6e8586d1cb4a35e156f89573d06cc9b54abaab5f30c9009ea842958d1ce8ac";
const defaultPtivateKey = "7adee52c88b8392d86f1110e13172584cda92a5c7ec8d49ad44f262a90d41093ae6e8586d1cb4a35e156f89573d06cc9b54abaab5f30c9009ea842958d1ce8ac";
const host = 'api.dmarket.com';

//common util for any requests here
export const getResponse=async(
                                    pubKey?:string, 
                                    secKey?:string, 
                                    path?:string,
                                    options?:object, 
                                    errorLocation?:string)=> {

    const method = "GET";
    const apiUrlPath = path? path:"/account/v1/user";
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + timestamp;
    const signature = sign(stringToSign, secKey?secKey:defaultPtivateKey);
    const requestOptions = {
        baseURL:'https://api.dmarket.com',
        host: host,
        path: apiUrlPath,
        method: method,
        params:options?options:{},
        headers: {
            "X-Api-Key": pubKey?pubKey:defaultPublicKey,
            "X-Request-Sign": "dmar ed25519 " + signature,
            "X-Sign-Date": timestamp,
            'Content-Type': 'application/json',
        }
    };

   const response =  await axios.get(apiUrlPath, requestOptions)
        .then(response=>response)
        .catch(e=>console.log('request rejected', errorLocation?errorLocation:'', e))
    return response
}




function byteToHexString(uint8arr) {
    if (!uint8arr) {
        return '';
    }
    let hexStr = '';
    const radix = 16;
    const magicNumber = 0xff;
    for (let i = 0; i < uint8arr.length; i++) {
        let hex = (uint8arr[i] & magicNumber).toString(radix);
        hex = (hex.length === 1) ? '0' + hex : hex;
        hexStr += hex;
    }
    return hexStr;
}

function hexStringToByte(str:string) {
    if (typeof str !== 'string') {
        throw new TypeError('Wrong data type passed to convertor. Hexadecimal string is expected');
    }
    const twoNum = 2;
    const radix = 16;
    const uInt8arr = new Uint8Array(str.length / twoNum);
    for (let i = 0, j = 0; i < str.length; i += twoNum, j++) {
        uInt8arr[j] = parseInt(str.substr(i, twoNum), radix);
    }
    return uInt8arr;
}

function hex2ascii(hexx:string) {
    const hex = hexx.toString();
    let str = '';
    for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function sign(string:string, secretKey:string) {
    const signatureBytes = nacl.sign(encoder.encode(string), hexStringToByte(secretKey));
    return byteToHexString(signatureBytes).substr(0,128);
}