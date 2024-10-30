// s'utilitza la funció 'findOne' per  promeses en lloc de callbacks.
// la funció retorna una nova promesa que es resol si trobem l'element i es rebutja si no el trobem.
const findOne = (list, { key, value }) => {
  // Creació i retorn d'una nova promesa.
  return new Promise((resolve, reject) => {
    //  retard de 2 segons amb setTimeout.
    setTimeout(() => {
      // Es busca l'element dins la llista on la propietat 'key' coincideixi amb 'value'.
      const element = list.find(element => element[key] === value);
      // Si es troba l'element, la promesa es resol amb el valor de l'element trobat.
      // Si no es troba, es rebutja amb un missatge d'error.
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000); // Retard de 2 segons.
  });
};

// l'array 'users' conté una llista d'usuaris amb les seves propietats 'name' i 'rol'.
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
console.log('findOne success');

// Utilitzem 'then' per gestionar el cas en què la promesa es resol correctament,
// quan es troba l'element. Mostrem el nom de l'usuari trobat.
findOne(users, { key: 'name', value: 'Carlos' })
  .then(element => console.log(`user: ${element.name}`)) // Cas de resolució exitosa.
  .catch(error => console.log(error.msg)); // Cas de rebuig de la promesa (no trobat).

console.log('findOne error');

// Fem una segona crida a 'findOne', aquesta vegada buscant un usuari que no existeix.

findOne(users, { key: 'name', value: 'Fermin' })
  .then(element => console.log(`user: ${element.name}`)) // Cas de resolució exitosa.
  .catch(error => console.log(error.msg)); // Cas de rebuig de la promesa (no trobat).
