const ORIGIN_LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];
const CRYPTO_LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

const crypto_sentence4 = `
HS RSX ASVVC EFSYX CSYV HMJJMGYPXMIW
MR QEXLIQEXMGW, M EWWYVI
CSY XLEX QMRI EVI KVIEXIV.
`;

const crypto_sentence5 = `
PKB KXN KGKI DRO LOCD ZBSJO DRKD VSPO
YPPOBC SC DRO MRKXMO DY GYBU RKBN KD
GYBU GYBDR NYSXQ.
`;

const crypto_sentence6 = `
JAJS NK DTZ'WJ TS YMJ WNLMY YWFHP, DTZ'QQ
LJY WZS TAJW NK DTZ OZXY XNY YMJWJ.
`;

const crypto_sentence7 = `
RCAB JMKICAM AWUMBPQVO LWMAV'B LW EPIB
GWC XTIVVML QB BW LW LWMAV'B UMIV QB'A
CAMTMAA.
`;

const crypto_sentence8 = `
OCPAQHNKHG'UHCKNWTGUCTGR
GQRNGYJQFKFPQVTGCNKBGJQ
YENQUGVJGAYGTGVQUWEEGUU
YJGPVJGAICXGWR.
`;

const crypto_sentence9 = `
QOXSEC SC YXO ZOB
MOXD SXCZSBKDSYX
XSXODI XSXO ZOB
MOXD ZOBCZSBKDSYX.
`;

const roll_count = 10;

function reRoll(c_sentence: string, r_count: number) {
  const count = r_count % 26;
  const c_letters = c_sentence.split('');

  for (let i = 0; i < count; i++) {
    const letter = CRYPTO_LETTERS.shift();
    CRYPTO_LETTERS.push(letter);
  }

  const o_letters = c_letters.map(letter => {
    const charCode = letter.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      const index = CRYPTO_LETTERS.indexOf(letter);
      return ORIGIN_LETTERS[index];
    }
    return letter;
  });

  return o_letters.join('');
}

const result = reRoll(crypto_sentence9, roll_count);
console.log('*Crypto Text:');
console.log(crypto_sentence9);
console.log('\n');
console.log('*Origin Text:');
console.log(result);

