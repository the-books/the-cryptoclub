import Ciphers, {
  CiphersAlphabet,
  CIPHERS_ALPHABET,
}  from "./cipher";

// const CIPHERS_DECIMAL = [
//   0,  1,  2,  3,  4,  5,
//   6,  7,  8,  9, 10, 11,
//  12, 13, 14, 15, 16, 17,
//  18, 19, 20, 21, 22, 23,
//  24, 25
// ];


let ciphers = new Ciphers(CIPHERS_ALPHABET);
ciphers.set(3);
ciphers.decode(`11, 22, 21, " ", 22, "'", 21, " ", 22, 25, 17, " ", 22, 11, 20, 7, 6`);

ciphers.set(5);
ciphers.decode("11, 22, 21, 22,' , 21 22, 25, 17 22, 11, 20, 7, 6");


ciphers.set(7);
ciphers.decode("11, 22, 21, 22,' , 21 22, 25, 17 22, 11, 20, 7, 6");
