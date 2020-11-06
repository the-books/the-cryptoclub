// 암호 문자('A' ~ 'Z'). 단일문자. 대문자.
const CIPHER_ALPHABETS: ReadonlyArray<string> = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

// 암호 문자('A' ~ 'Z')의 갯수
const SIZE_ALPHABETS: number = CIPHER_ALPHABETS.length;

// 문자('A')의 UTF-16 코드
const CIPHER_A = CIPHER_ALPHABETS[0].charCodeAt(0);

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
 * isCipher('@');
 * @param {string} alphabet 확인이 필요한 알파벳
 * @returns {boolean} 암호 알파벳 확인 결과
 */
function isCipher(alphabet: string): boolean {
  return CIPHER_ALPHABETS.includes(alphabet);
}

function isCycleNumber(move: number): boolean {
  return move >= 0 && move < SIZE_ALPHABETS;
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
  let remainder = move % SIZE_ALPHABETS;

  if (remainder < 0) {
    remainder = remainder + SIZE_ALPHABETS;
  }

  return remainder;
}

/**
 * 입력된 수 만큼 이동시킨 암호 알파벳 배열을 반환한다.
 * @example <caption>3칸 자리이동을 한다. (반시계방향)</caption>
 * // returns ['D', 'E', 'F', ..., 'A', 'B', 'C']
 * ciphers(3);
 * @example <caption>뒤로 3칸 자리이동을 한다. (시계방향)</caption>
 * // returns ['X', 'Y', 'Z', 'A', 'B', 'C', ...]
 * ciphers(-3);
 * @param {Number} move 알파벳을 이동시킬 자리 수
 * @returns {Array} 암호 알파벳 배열
 */
function ciphers(move: number): ReadonlyArray<string> {
  const index = cycleNumber(move);
  const prev = CIPHER_ALPHABETS.slice(index);
  const next = CIPHER_ALPHABETS.slice(0, index);

  return prev.concat(next);
}

/**
 * 입력된 알파벳으로 시작하는 암호 알파벳 배열을 반환한다.
 * @example <caption>'D'로 시작하는 암호 알파벳</caption>
 * // returns ['D', 'E', 'F', ... 'Z', 'A', 'B', 'C']
 * ciphersWithAlphabet('D');
 * @example <caption>'X'로 시작하는 암호 알파벳</caption>
 * // returns ['X', 'Y', 'Z', 'A', 'B', 'C', ... 'W']
 * ciphersWithAlphabet('X');
 * @param {string} alphabet 알파벳 문자
 * @returns {Array} 암호 알파벳 배열
 */
function ciphersWithAlphabet(alphabet: string): ReadonlyArray<string> {
  if (alphabet.length !== 1) {
    throw Error('alphabet must be one digit');
  }

  if (!isCipher(alphabet)) {
    throw Error('alphabet is not a cipher letter');
  }

  const move = alphabet.charCodeAt(0) - CIPHER_A;

  return ciphers(move);
}

export {
  isCipher,
  isCycleNumber,
  cycleNumber,
  ciphers,
  ciphersWithAlphabet,
};
