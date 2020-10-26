const LETTERS = [
  { cipher: 'A', character: '_' },
  { cipher: 'B', character: '_' },
  { cipher: 'C', character: 'a' },
  { cipher: 'D', character: 't' },
  { cipher: 'E', character: '_' },
  { cipher: 'F', character: '_' },
  { cipher: 'G', character: 'i' },
  { cipher: 'H', character: '_' },
  { cipher: 'I', character: '_' },
  { cipher: 'J', character: 's' },
  { cipher: 'K', character: '_' },
  { cipher: 'L', character: '_' },
  { cipher: 'M', character: '_' },
  { cipher: 'N', character: '_' },
  { cipher: 'O', character: '_' },
  { cipher: 'P', character: '_' },
  { cipher: 'Q', character: 'e' },
  { cipher: 'R', character: '_' },
  { cipher: 'S', character: '_' },
  { cipher: 'T', character: '_' },
  { cipher: 'U', character: '_' },
  { cipher: 'V', character: '_' },
  { cipher: 'W', character: '_' },
  { cipher: 'X', character: '_' },
  { cipher: 'Y', character: 'm' },
  { cipher: 'Z', character: '_' },
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
KDAH. CD NUTEMUI I'Y WQLTD CDQ,
"NDGQ BQGJJY, TCGKHS CDGOS. E'N
WQETD JLQD RUT E'J GII ACLHDN
UO."
`;
const a0 = decoding(q0);
console.log(a0);
