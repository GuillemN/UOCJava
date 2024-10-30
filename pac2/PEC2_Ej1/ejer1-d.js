// Funció findOne
const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  });
};

const users = [
  { name: 'Carlos', rol: 'Teacher' },
  { name: 'Ana', rol: 'Boss' }
];

// Funció asíncrona per executar findOne en paral·lel utilitzant Promise.allSettled
const findUsersParallelAsync = async () => {
  // Utilitzem Promise.allSettled per executar les promeses en paral·lel i gestionar resultats individuals
  const results = await Promise.allSettled([
    findOne(users, { key: 'name', value: 'Carlos' }),  // Primera crida a findOne
    findOne(users, { key: 'name', value: 'Fermin' })   // Segona crida a findOne
  ]);

  // Iteració sobre els resultats per mostrar els valors trobats o els missatges d'error
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log(`user: ${result.value.name}`);  // Mostra el nom si es troba
    } else {
      console.log(result.reason.msg);  // Mostra el missatge d'error si no es troba
    }
  });
};

console.log('Execució paral·lela amb async/await:');
findUsersParallelAsync();
