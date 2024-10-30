  // Amb MOD 2 === 0 filtrem els numeros parells 
function onlyEven(array) {
  return array.filter(number => number % 2 === 0); 
}

  //nomes guardem les cadenes amb una paraula amb !word.includes (" ")
function onlyOneWord(array) {
  return array.filter(word => !word.includes(" ")); 
}

  //nomes guardem les arrays positives revisant que sigui superior a 0 
function positiveRowsOnly(array) {
  return array.filter(row => row.every(number => number > 0));
}

  // Amb la variable vocals extreiem les vocals amb /[aeiou]/ i "g" significa global per tant busca a tot el vector
  // i es compara si totes les vocals son iguals
function allSameVowels(array) {
  return array.filter(word => {
    const vocals = word.match(/[aeiou]/g) || [];
    return vocals.every(vocal => vocal === vocals[0]);
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
