// Importa les dades del zoo des del mòdul "data"
const zoo = require('./data'); 

// Calcula el cost d'entrada basat en el nombre d'adults, nens i gent gran
function entryCalculator(entrants = {}) {
  // Assigna valors per defecte als tipus d'entrants
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  // Calcula el cost total basant-se en els preus de cada tipus d'entrant
  const total = (Adult * zoo.prices.Adult) + (Child * zoo.prices.Child) + (Senior * zoo.prices.Senior);
  return total; // Retorna el cost total
}

// Genera un horari llegible per humans, opcionalment només per un dia específic
function schedule(dayName) {
  const days = zoo.hours; // Recupera els horaris del zoo
  
  // Defineix una funció per formatar l'horari d'un dia específic
  const formatDay = day => {
    if (day.open === 0 && day.close === 0) return 'CLOSED'; // Si el zoo està tancat
    // Converteix les hores a format 12 hores (am/pm)
    const openTime = day.open > 12 ? `${day.open - 12}pm` : `${day.open}am`;
    const closeTime = day.close > 12 ? `${day.close - 12}pm` : `${day.close}pm`;
    return `Open from ${openTime} until ${closeTime}`; // Retorna l'horari en format llegible
  };

  // Si es proporciona un dia específic, retorna només l'horari d'aquest dia
  if (dayName) {
    return { [dayName]: formatDay(days[dayName]) };
  }

  // Retorna l'horari complet del zoo per a tota la setmana
  return Object.fromEntries(Object.entries(days).map(([day, hours]) => [day, formatDay(hours)]));
}

// Retorna el nombre d'animals per espècie o només el compte d'una espècie específica si es proporciona
function animalCount(species) {
  // Calcula el nombre d'animals per espècie utilitzant "reduce"
  const countBySpecies = zoo.animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length; // Assigna el nombre de residents per a cada espècie
    return acc;
  }, {});
  return species ? countBySpecies[species] : countBySpecies; // Retorna el compte per una espècie específica o el compte complet
}

// Organitza els animals per ubicació amb opcions per incloure noms i sexe
function animalMap(options = {}) {
  // Redueix la llista d'animals en un objecte organitzat per ubicació
  return zoo.animals.reduce((acc, { name, location, residents }) => {
    let animalData = name; // Defineix el nom de l'animal per defecte
    if (options.includeNames) { // Si es demana incloure noms
      let filteredResidents = residents;
      if (options.sex) { // Filtra per sexe si l'opció es proporciona
        filteredResidents = residents.filter(res => res.sex === options.sex);
      }
      // Crea un objecte amb el nom de l'espècie i una llista de noms filtrats
      animalData = { [name]: filteredResidents.map(res => res.name) };
    }
    // Crea una entrada a la ubicació si no existeix
    if (!acc[location]) acc[location] = [];
    acc[location].push(animalData); // Afegeix l'animal (o espècie) a la ubicació
    return acc;
  }, {});
}

// Organitza els animals per popularitat i retorna una llista d'espècies per a cada nivell de popularitat
function animalPopularity(rating) {
  // Agrupa els animals per popularitat utilitzant "reduce"
  const popularityMap = zoo.animals.reduce((acc, { name, popularity }) => {
    if (!acc[popularity]) acc[popularity] = []; // Crea l'entrada de popularitat si no existeix
    acc[popularity].push(name); // Afegeix el nom de l'espècie a la seva popularitat corresponent
    return acc;
  }, {});
  return rating ? popularityMap[rating] : popularityMap; // Retorna només les espècies amb la popularitat indicada o tota la llista
}

// Retorna els animals amb els `id` especificats
function animalsByIds(...ids) {
  // Si el primer element de `ids` és un array, utilitzem aquest array directament
  const idList = Array.isArray(ids[0]) ? ids[0] : ids;
  return zoo.animals.filter(animal => idList.includes(animal.id)); // Filtra els animals segons els `id` especificats
}

// Busca un animal pel seu nom i retorna informació sobre ell
function animalByName(animalName) {
  const animal = zoo.animals.flatMap(a => a.residents)
    .find(res => res.name === animalName); // Troba el resident amb el nom especificat
  // Retorna l'objecte amb el nom, sexe, edat i espècie de l'animal
  return animal ? { ...animal, species: zoo.animals.find(a => a.residents.includes(animal)).name } : {};
}

// Retorna els empleats amb els `id` especificats
function employeesByIds(...ids) {
  // Si el primer element de `ids` és un array, utilitzem aquest array directament
  const idList = Array.isArray(ids[0]) ? ids[0] : ids;
  return zoo.employees.filter(employee => idList.includes(employee.id)); // Filtra els empleats segons els `id` especificats
}

// Busca un empleat pel seu nom o cognom i retorna l'objecte d'aquest empleat
function employeeByName(employeeName) {
  return zoo.employees.find(emp => emp.firstName === employeeName || emp.lastName === employeeName) || {};
}

// Retorna els gerents d'un empleat basant-se en el seu `id` o nom
function managersForEmployee(idOrName) {
  const employee = zoo.employees.find(emp => emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName);
  return employee ? {
    ...employee,
    // Afegeix els noms complets dels gerents
    managers: employee.managers.map(managerId => {
      const manager = zoo.employees.find(emp => emp.id === managerId);
      return `${manager.firstName} ${manager.lastName}`;
    })
  } : {};
}

// Retorna els animals de responsabilitat per a cada empleat o per a un empleat específic
function employeeCoverage(idOrName) {
  // Donat un empleat, retorna un objecte amb el seu nom complet i els animals responsables
  const formatCoverage = employee => {
    const animals = employee.responsibleFor.map(animalId => zoo.animals.find(animal => animal.id === animalId).name);
    return { [`${employee.firstName} ${employee.lastName}`]: animals };
  };

  if (idOrName) { // Si es proporciona `idOrName`, retorna només la cobertura d'aquest empleat
    const employee = zoo.employees.find(emp => emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName);
    return formatCoverage(employee);
  }

  // Si no es proporciona `idOrName`, retorna la cobertura de tots els empleats
  return zoo.employees.reduce((acc, employee) => ({
    ...acc, ...formatCoverage(employee)
  }), {});
}

// Exporta totes les funcions perquè estiguin disponibles fora d'aquest mòdul
module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
