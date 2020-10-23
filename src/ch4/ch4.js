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

  const result = [];
  const iterator1 = text.split('').values();
  for (const value of iterator1) {
    if (table.has(value)) {
      result.push(table.get(value));
    } else {
      result.push(value);
    }
  }
  return result.join('');
}


const quiz0 = decodingText('DANNA', 'h', 'YAFWAFZ DTCY T PGJE');
console.log(quiz0);

const quiz1 = decodingText('HOUSE', 'm', 'OU. CVQJ LAQ MUAO');
console.log(quiz1);

const quiz2 = decodingText('MUSIC', 'd', 'VHPL UXLMLPFN');
console.log(quiz2);

const quiz3 = decodingText('FISH', 'a', 'TDA MNQTD FMH RNUTD ONKAR');
console.log(quiz3);

const quiz4 = decodingText('ANIMAL', 'g', 'ZEH NEBXIDA OF KNY FUDKJ');
console.log(quiz4);

const quiz5 = decodingText('RABBIT', 'f', 'WS BVKZHDVFZ');
console.log(quiz5);

const quiz6 = decodingText('MISSISSIPPI', 'd', 'IXLN HS ZHLG');
console.log(quiz6);

const qText = `
OLIL FIL ROL JLRFQWT ZM ROL ZPRJZZI HWPG'T TVQ
RIQS: ROL RBZ-JFD RIQS RZ SQYL XZPYRFQY BQWW GL
TFRPIJFD FYJ TPYJFD, ROL MQITR BLLVLYJ QY MLGIPFID.

ROL GPT BQWW WLFAL MIZX ROL SFIV'T OLFJKPFIRLIT
FR LQNOR FX FYJ ILRPIY FR RLY SX TPYJFD.

ILNQTRIFRQZY MZIXT FIL JPL GD YLCR MIQJFD SQHV
ROLX PS QY ROL SFIV ZMMQHL

ROL RIQS QT WQXQRLJ RZ ROL MQITR RBLYRD BOZ
TQNY PS, TZ SWLFTL OPIID ZI ROLIL XQNOR YZR GL
LYZPNO TSFHL.
`;
const quiz7 = decodingText('SKITRIP', 'p', qText);
console.log(quiz7);
