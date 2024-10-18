// Modifiquem la funció 'findOne' per utilitzar promeses en lloc de callbacks.
// Aquesta funció retorna una nova promesa que es resol si trobem l'element i es rebutja si no el trobem.
const findOne = (list, { key, value }) => {
  // Creem i retornem una nova promesa.
  return new Promise((resolve, reject) => {
    // Simulem un retard de 2 segons amb setTimeout.
    setTimeout(() => {
      // Cerquem l'element dins la llista on la propietat 'key' coincideixi amb 'value'.
      const element = list.find(element => element[key] === value);
      // Si es troba l'element, la promesa es resol amb el valor de l'element trobat.
      // Si no es troba, es rebutja amb un missatge d'error.
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000); // Retard de 2 segons.
  });
};

// Definim un array 'users' que conté una llista d'usuaris amb les seves propietats 'name' i 'rol'.
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

// Mostrem per pantalla que s'iniciarà la cerca amb èxit.
console.log('findOne success');

// Consumim la promesa retornada per 'findOne' utilitzant 'then' i 'catch'.
// Utilitzem 'then' per gestionar el cas en què la promesa es resol correctament,
// és a dir, quan es troba l'element. Mostrem el nom de l'usuari trobat.
findOne(users, { key: 'name', value: 'Carlos' })
  .then(element => console.log(`user: ${element.name}`)) // Cas de resolució exitosa.
  .catch(error => console.log(error.msg)); // Cas de rebuig de la promesa (no trobat).

// Mostrem per pantalla que s'iniciarà la cerca amb error.
console.log('findOne error');

// Fem una segona crida a 'findOne', aquesta vegada buscant un usuari que no existeix.
// Utilitzem 'catch' per gestionar el cas en què la promesa es rebutja,
// és a dir, quan no es troba l'element, i mostrem el missatge d'error.
findOne(users, { key: 'name', value: 'Fermin' })
  .then(element => console.log(`user: ${element.name}`)) // Cas de resolució exitosa.
  .catch(error => console.log(error.msg)); // Cas de rebuig de la promesa (no trobat).
