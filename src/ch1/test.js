const cipher = new Map([
  ['a', 'A'],
  ['b', 'B'],
  ['c', 'C'],
  ['d', 'D'],
  ['e', 'E'],
  ['f', 'F'],
]);

console.log(cipher.size);
console.log(cipher.keys());
console.log(cipher.values());
console.log(cipher.has('c'))
console.log(cipher.get('c'));
console.log(cipher.has('s'))
console.log(cipher.get('s'));
