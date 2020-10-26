const LETTERS = [
  { cipher: 'A', character: 'p' },
  { cipher: 'B', character: '_' },
  { cipher: 'C', character: 'k' },
  { cipher: 'D', character: 'r' },
  { cipher: 'E', character: 's' },
  { cipher: 'F', character: 't' },
  { cipher: 'G', character: 'u' },
  { cipher: 'H', character: 'v' },
  { cipher: 'I', character: 'l' },
  { cipher: 'J', character: 'w' },
  { cipher: 'K', character: '_' },
  { cipher: 'L', character: 'y' },
  { cipher: 'M', character: '_' },
  { cipher: 'N', character: 'a' },
  { cipher: 'O', character: '_' },
  { cipher: 'P', character: 'c' },
  { cipher: 'Q', character: 'd' },
  { cipher: 'R', character: '_' },
  { cipher: 'S', character: 'o' },
  { cipher: 'T', character: 'e' },
  { cipher: 'U', character: 'n' },
  { cipher: 'V', character: 'f' },
  { cipher: 'W', character: 'g' },
  { cipher: 'X', character: 'h' },
  { cipher: 'Y', character: 'i' },
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
Y XTNDQ DNQYS EFNFYSU JKLM
NUUSGUPTQ FXTL JYII WYHT
NJNL VDTT PYDPGE FYPCTFE FS
FXT VYDEF FJTUFL-VYHT ATSAIT
JXS PNII YU. YF ESGUQE IYCT
VGU. ITF'E NII PNII NUQ WS
FSWTFXTD.
`;
const a0 = decoding(q0);
console.log(a0);
