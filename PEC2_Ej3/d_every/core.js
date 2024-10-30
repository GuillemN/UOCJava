
//es comprova si es divisble entre 2
function allEven(input) {
  return input.every(num => num % 2 === 0);
}


// Es mira el tipus del primer valor i es comprova els seguent si son del mateix tipus
function allSameType(input) {
  const type = typeof input[0];
  return input.every(item => typeof item === type);
}

//Es comprova si tots els numeros son superiors a 0

function positiveMatrix(input) {
  return input.every(row => row.every(num => num > 0));
}



function allSameVowels(input) {
}



module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
