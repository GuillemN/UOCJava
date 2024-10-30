  // Es crea un nou array amb cada element multiplicat per 10
function multiplyBy10(array) {
  return array.map(num => num * 10);
}
  //no he trobat com fer-ho amb map
  // Extreu l'últim element de l'array amb pop i el situa al principi de l'array nou
function shiftRight(array) {
  return [array.pop(), ...array];
}
  
// Utilitza map per iterar sobre cada paraula de l'array replace elimina qualsevol caràcter que no sigui vocal
function onlyVowels(array) {
  return array.map(word => word.replace(/[^aeiou]/g, ''));
}

// Duplica cada número en l'array bidimensional (matriu)
// Utilitza map per iterar sobre cada sub-array i duplicar cada element dins seu
function doubleMatrix(array) {
  return array.map(row => row.map(num => num * 2));
}

// Exporta les funcions
module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
