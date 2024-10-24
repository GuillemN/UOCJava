// Funció findOne es manté igual, torna una promesa
const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  });
};

// Funció asíncrona per executar findOne en paral·lel utilitzant async/await
const findUsersParallelAsync = async () => {
  try {
    // Promise.all s'utilitza també aquí per executar les promeses en paral·lel
    const results = await Promise.all([
      findOne(users, { key: 'name', value: 'Carlos' }),  // Primera crida a findOne
      findOne(users, { key: 'name', value: 'Fermin' })   // Segona crida a findOne
    ]);

    // Quan totes les promeses s'han resolt, iterem sobre els resultats
    results.forEach(user => console.log(`user: ${user.name}`));  // Mostra els noms dels usuaris trobats
  } catch (error) {
    // Si alguna promesa falla, es captura l'error aquí
    console.log(error.msg);  // Mostra el missatge d'error
  }
};

// Crida a la funció per executar en paral·lel amb async/await
console.log('Execució paral·lela amb async/await:');
findUsersParallelAsync();
