const KEY_LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];
const ORIGIN_LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

/**
 * 결과 값은 순환 된다.
 * @example
 * // returns 1
 * remainder(1);
 * @example
 * // returns 0
 * remainder(26);
 * @example
 * // returns 2
 * remainder(28);
 * @example
 * // returns 0
 * remainder(52);
 */
function remainder(cipher) {
  return cipher % ORIGIN_LETTERS.length;
}

/**
 * 입력된 자리 만큼 이동시킨 대체 암호 문자를 배열로 반환한다.
 * @example <caption>3칸 자리이동을 한다. </caption>
 * // returns ['D', 'E', 'F', ... 'Z', 'A', 'B', 'C']
 * makeCipher(3);
 * @example <caption>뒤로 3칸 자리이동을 한다.</caption>
 * // returns ['X', 'Y', 'Z', 'A', 'B', 'C', ... 'W']
 * makeCipher(-3);
 * @param {Number} cipher 알파벳을 이동시킬 자리 수
 * @returns {Array} 자리 수 만큼 이동된 알파벳 배열
 */
function makeCipher(cipher) {
  let index = remainder(cipher);
  if (index < 0) {
    index += ORIGIN_LETTERS.length;
  }
  const front = ORIGIN_LETTERS.slice(index);
  const back = ORIGIN_LETTERS.slice(0, index);

  return front.concat(back);
}

function encoding(text, cipher = 3) {
  const result = [];
  const CRYPTO_LETTERS = makeCipher(cipher);

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

function decoding(text, cipher = 3) {
  const result = [];
  const CRYPTO_LETTERS = makeCipher(cipher);

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

// const result0 = makeCipher(-24);
// console.log(result0);

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


