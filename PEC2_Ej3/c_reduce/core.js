  // A la variable sumatori guarda el numero sumat anteriorment, 
  //la variable actual és el numero que pertoca fer la suma i es comença amb 0
function sum(array) {
  return array.reduce((sumatori, actual) => sumatori + actual, 0);
}

//flat transforma la matriu de varies arrays en una.
 //La resta es igual a l'anterior funció però començant amb 1 i multiplicant.
function productAll(array) {
  return array.flat().reduce((sumatori, actual) => sumatori * actual, 1);
}

//primer determinem que volem juntar tot a un array amb la variable sumatori i 
//l'array té una clau i un valor en aquest ordre.
//A cada pas, afegim aquesta parella clau-valor a l'objecte sumatori
//transformant el format original (array de subarrays) en un únic objecte que guarda totes les parelles clau-valor.

function objectify(array) {
  return array.reduce((sumatori, [clau, valor]) => {
    sumatori[clau] = valor;
    return sumatori;
  }, {}); // 
}



function luckyNumbers(array) {
//Concatenem els valors de l'array amb la frase que ens demana,
//er detectar el ultim utilitzem la varaible "i" ja que aixi podem afegir la paraula "and"
  return array.reduce((frase, num, i) => {
    if (i === array.length - 1) {
      return frase + 'and ' + num;
    }
    return frase + num + ', ';
  }, 'Your lucky numbers are: ');
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
