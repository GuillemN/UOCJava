//Es comprova si algun numero es superior a 10
function anyGreaterThan10 (input) {
  return input.some(num => num > 10);
}

//Es comprova si alguna paraula té més de 10 lletres
function longWord (input) {
  return input.some(word => word.length > 10);
};

//Es mira si hi ha algun True al array
function truePossibilities (input) {
  return input.some(row => row.some(value => value === true));

};

//Es comprova si hi ha la paraula Lost a la frase
function lostCarcosa (input) {
  return input.some(line => line.includes('Lost'));
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
