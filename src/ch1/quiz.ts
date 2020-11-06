import { encoding, decoding } from './ch1';

const text1 = "keep this secret";
console.log(text1);

// "NHHS WKLV VHFUHW"
const result1 = encoding(text1, 3);
console.log(result1);

const text2 = "WSVVC PIX'W YWI GMTLIVW JVSQ RSA SR.";
console.log(text2);

// "sorry let's use ciphers from now on."
const result2 = decoding(text2, 4);
console.log(result2);

