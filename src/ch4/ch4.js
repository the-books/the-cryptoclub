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


// 'DANNY'
// -> ['D','A','N','N','Y']
// -> ['D','A','N','Y']
function uniq(keyword) {
  const words = keyword.split('');
  const keywordSet = new Set(words);
  const result = [];
  keywordSet.forEach(letter => result.push(letter));

  return result;
}

function remainder(cipher) {
  return cipher % KEY_LETTERS.length;
}

/**
 * 입력된 자리 만큼 이동시킨 대체 암호 문자를 배열로 반환한다.
 * @param {Number} cipher 알파벳을 이동시킬 자리 수
 * @returns {Array} 자리 수 만큼 이동된 알파벳 배열
 */
function makeCipher(cipher) {
  let index = remainder(cipher);
  if (index < 0) {
    index += KEY_LETTERS.length;
  }
  const front = KEY_LETTERS.slice(index);
  const back = KEY_LETTERS.slice(0, index);

  return front.concat(back);
}

/**
 * 
 * @param {string} keyword 키워드 단어
 * @param {string} keyLetter 키 문자(키워드 단어가 시작되는 부분)
 * @param {string} text 암호화된 문자
 */
function decodingText(keyword, keyLetter, text) {

  const keywords = uniq(keyword);
  const cryptoLetters = new Set([...keywords, ...ORIGIN_LETTERS]);

  const index = KEY_LETTERS.indexOf(keyLetter);
  const ciphers = makeCipher(index);

  const table = new Map();
  const keys = cryptoLetters.values();
  const iterator = ciphers.values();

  for (const value of iterator) {
    let key = keys.next().value;
    table.set(key, value);
  }

  console.log(table.get('Y'));
  console.log(table.get('A'));
  console.log(table.get('F'));
  console.log(table.get('W'));
  console.log(table.get('A'));
  console.log(table.get('F'));
  console.log(table.get('Z'));
  return '';
}


decodingText('DANNA', 'h', 'XYZ');
