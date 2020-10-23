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

/**
 * 
 * @param {string} keyword 키워드 단어
 * @param {string} keyLetter 키 문자(키워드 단어가 시작되는 부분)
 * @param {string} text 암호화된 문자
 */
function decodingText(keyword, keyLetter, text) {

  const keywords = uniq(keyword);
  const cryptoLetters = new Set([...keywords, ...ORIGIN_LETTERS]);

  cryptoLetters.forEach(letter => console.log(letter));

  return '';
}


decodingText('DANNY', 'p', 'XYZ');
