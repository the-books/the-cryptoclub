import {
  isCipher,
  cycleNumber,
  cipher,
} from '../cipher/cipher';

const KEY_LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];

function encoding(text: string, move = 3): string {
  const result = [];
  const CRYPTO_LETTERS = cipher(cycleNumber(move));

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const charCode = text.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      const index = KEY_LETTERS.indexOf(char);
      result.push(CRYPTO_LETTERS[index]);
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

function decoding(text: string, move = 3): string {
  const result = [];
  const CRYPTO_LETTERS = cipher(cycleNumber(move));

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      const index = CRYPTO_LETTERS.indexOf(char);
      result.push(KEY_LETTERS[index]);
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

export {
  encoding,
  decoding,
};
