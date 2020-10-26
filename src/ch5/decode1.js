const LETTERS = [
  { cipher: 'A', character: 'c' },
  { cipher: 'B', character: 'g' },
  { cipher: 'C', character: 'h' },
  { cipher: 'D', character: 'e' },
  { cipher: 'E', character: 'i' },
  { cipher: 'F', character: '_' },
  { cipher: 'G', character: 'a' },
  { cipher: 'H', character: 'k' },
  { cipher: 'I', character: 'l' },
  { cipher: 'J', character: 'm' },
  { cipher: 'K', character: 'n' },
  { cipher: 'L', character: 'o' },
  { cipher: 'M', character: 'f' },
  { cipher: 'N', character: 'd' },
  { cipher: 'O', character: 'p' },
  { cipher: 'P', character: '_' },
  { cipher: 'Q', character: 'r' },
  { cipher: 'R', character: 'b' },
  { cipher: 'S', character: 's' },
  { cipher: 'T', character: 't' },
  { cipher: 'U', character: 'u' },
  { cipher: 'V', character: 'v' },
  { cipher: 'W', character: 'w' },
  { cipher: 'X', character: 'x' },
  { cipher: 'Y', character: 'y' },
  { cipher: 'Z', character: 'z' },
];

const CIPHERS = LETTERS.map(l => l.cipher);
const CHARACTERS = LETTERS.map(l => l.character);

function decoding(text) {
  const result = [];

  for (let i = 0; i < text.length; i++) {
    const cipher = text.charAt(i);
    const index = CIPHERS.indexOf(cipher);
    if (index > -1) {
      result[i] = CHARACTERS[index];
    } else {
      result[i] = cipher;
    }
  }

  return result.join('');
}

const q0 = `
BQGKNJG SDKT CDQ MGVLQETD
BQGKNSLK G CGKNSLJD KDW SCEQT
MLQ CES REQTCNGY. UKMLQTUKGTDIY,
ET CGN G SEZD MLUQTDDK ALIIGQ
GKN TCD RLY CGN G SEZD SEXTDDK
KDAH. CD NUTEMUIIY WQLTD CDQ,
"NDGQ BQGJJY, TCGKHS CDGOS. E'N
WQETD JLQD RUT E'J GII ACLHDN
UO."
`;
const a0 = decoding(q0);
console.log(a0);
