// Funció findOne que retorna una promesa
const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  });
};


const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

// Funció asíncrona per gestionar l'ús de findOne amb async/await
const findUser = async () => {
  try {
    // s'utilitza await per esperar a que la promesa de findOne es resolgui
    const user = await findOne(users, { key: 'name', value: 'Carlos' });
    // Si la promesa es resol, es mostra el nom de l'usuari trobat
    console.log(`user: ${user.name}`);
  } catch (error) {
    // Si la promesa és rebutjada, el catch captura l'error i mostra el missatge
    console.log(error.msg);
  }
};

// Funció asíncrona per gestionar el cas d'error amb async/await
const findUserError = async () => {
  try {
    // Esperem a que findOne s'executi i busqui un usuari inexistent
    const user = await findOne(users, { key: 'name', value: 'Fermin' });
    // Si es troba l'usuari, aquest missatge es mostraria, però no passarà
    console.log(`user: ${user.name}`);
  } catch (error) {
    // Si no es troba l'usuari, es captura l'error i es mostra el missatge d'error
    console.log(error.msg);
  }
};

console.log('findOne success');
findUser(); // Crida a la funció findUser per gestionar la promesa

console.log('findOne error');
findUserError(); // Crida a la funció findUserError per gestionar l'error
