const CIPHER_ALPHABET: ReadonlyArray<string> = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

const SIZE_ALPHABET: number = CIPHER_ALPHABET.length;

const CODE_A = CIPHER_ALPHABET[0].charCodeAt(0);

const CODE_Z = CIPHER_ALPHABET[SIZE_ALPHABET - 1].charCodeAt(0);

/**
 * 입력된 문자가 암호 알파벳 배열('A' ~ 'Z')에 포함된 문자인지 결과를 반환한다.
 * @example
 * // returns true
 * isCipher('A');
 * @example
 * // returns false
 * isCipher('a');
 * @example
 * // returns false
 * isCipher('?');
 * @param {string} alphabet 확인이 필요한 알파벳
 * @returns {Boolean} 암호 알파벳 확인 결과
 */
function isCipher(alphabet: string): boolean {
  const charCode = alphabet.charCodeAt(0);
  return charCode >= CODE_A && charCode <= CODE_Z;
}

/**
 * 순환 값을 구한다.
 * @example <caption>1 이동한다.</caption>
 * // returns 1
 * cycleNumber(1);
 * @example <caption>26 이동하면 0으로 순환된다.</caption>
 * // returns 0
 * cycleNumber(26);
 * @example <caption>-1은 25만큼 이동한 것과 같다.</caption>
 * // returns 25
 * cycleNumber(-1);
 */
function cycleNumber(move: number): number {
  let remainder = move % SIZE_ALPHABET;

  if (remainder < 0) {
    remainder = remainder + SIZE_ALPHABET;
  }

  return remainder;
}

/**
 * 입력된 수 만큼 이동시킨 암호 알파벳 배열을 반환한다.
 * @example <caption>3칸 자리이동을 한다. (반시계방향)</caption>
 * // returns ['D', 'E', 'F', ..., 'A', 'B', 'C']
 * cipher(3);
 * @example <caption>뒤로 3칸 자리이동을 한다. (시계방향)</caption>
 * // returns ['X', 'Y', 'Z', 'A', 'B', 'C', ...]
 * cipher(-3);
 * @param {Number} move 알파벳을 이동시킬 자리 수
 * @returns {Array} 암호 알파벳 배열
 */
function cipher(move: number): ReadonlyArray<string> {
  const index = cycleNumber(move);
  const prev = CIPHER_ALPHABET.slice(index);
  const next = CIPHER_ALPHABET.slice(0, index);

  return prev.concat(next);
}

/**
 * 입력된 알파벳으로 시작하는 암호 알파벳 배열을 반환한다.
 * @example <caption>'D'로 시작하는 암호 알파벳</caption>
 * // returns ['D', 'E', 'F', ... 'Z', 'A', 'B', 'C']
 * cipher('D');
 * @example <caption>'X'로 시작하는 암호 알파벳</caption>
 * // returns ['X', 'Y', 'Z', 'A', 'B', 'C', ... 'W']
 * cipher('X');
 * @param {string} alphabet 알파벳 문자
 * @returns {Array} 암호 알파벳 배열
 */
function cipherByAlphabet(alphabet: string): ReadonlyArray<string> {
  if (alphabet.length !== 1) {
    throw Error('alphabet must be one digit');
  }

  const move = alphabet.charCodeAt(0) - CODE_A;

  return cipher(move);
}

export {
  isCipher,
  cycleNumber,
  cipher,
  cipherByAlphabet,
};
