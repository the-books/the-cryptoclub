type Alphabet = "A" | "B" | "C" | "D" | "E" | "F" |
                "G" | "H" | "I" | "J" | "K" | "L" |
                "M" | "N" | "O" | "P" | "Q" | "R" |
                "S" | "T" | "U" | "V" | "W" | "X" |
                "Y" | "Z" ;

type Alphabet_Array = ReadonlyArray<Alphabet>;

// 암호 문자
const CIPHERS_ALPHABET: ReadonlyArray<Alphabet> = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

// 암호 문자의 갯수
const SIZE_CIPHERS: number = CIPHERS_ALPHABET.length;

// 첫번째 암호 문자의 UTF-16 코드
// const FIRST_CIPHER = DEFAULT_CIPHERS[0].charCodeAt(0);

/**
 * 입력된 문자가 암호 문자인지 결과를 반환한다.
 * @param {string} character 확인할 문자
 * @returns {boolean} 확인 결과
 */
function isCipher(character: Alphabet): boolean {
  return CIPHERS_ALPHABET.includes(character);
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
  let remainder = move % SIZE_CIPHERS;

  if (remainder < 0) {
    remainder = remainder + SIZE_CIPHERS;
  }

  return remainder;
}

class Ciphers {
  private ciphers: Alphabet_Array;
  // private movedCiphers: CiphersArray;

  constructor(init_ciphers: CiphersArray) {
    if (instanceof init_ciphers === A)
    this.ciphers = [...init_ciphers];
  }

  // move(decimal: number): Ciphers {
  //   const index = cycleNumber(decimal);
  //   const prev = this.ciphers.slice(index);
  //   const next = this.ciphers.slice(0, index);

  //   this.movedCiphers = prev.concat(next);

  //   return this;
  // }

  // decode() {

  // }
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
// function ciphers(move: number): ReadonlyArray<string> {
//   const index = cycleNumber(move);
//   const prev = DEFAULT_CIPHERS.slice(index);
//   const next = DEFAULT_CIPHERS.slice(0, index);

//   return prev.concat(next);
// }

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
// function ciphersWithAlphabet(alphabet: string): ReadonlyArray<string> {
//   if (alphabet.length !== 1) {
//     throw Error('alphabet must be one digit');
//   }

//   if (!isCipher(alphabet)) {
//     throw Error('alphabet is not a cipher letter');
//   }

//   const move = alphabet.charCodeAt(0) - FIRST_CIPHER;

//   return ciphers(move);
// }

export default Ciphers;
export {
  CiphersAlphabet,
  CIPHERS_ALPHABET,
  CIPHERS_DECIMAL,
};
