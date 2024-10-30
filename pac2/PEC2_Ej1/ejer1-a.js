// Defineix la funció findOne amb tres paràmetres:
// - list: l'array on es buscarà l'element.
// - El primer objecte té dos valors 'key' i 'value' per fer la cerca dins de l'array.
// - El segon objecte té dos callbacks, onSuccess i onError, per gestionar el resultat.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    // Utilitza setTimeout per simular una cerca que es retrassa  2 segons.
    setTimeout(() => {
    // la constant element busca dins la llista quin element indicat per la 'key' coincideixi amb el 'value'.
    const element = list.find(element => element[key] === value);
      // Si l'element és trobat, crida el callback onSuccess amb l'element trobat.
      // Si no es troba, crida el callback onError amb un missatge indicant que no s'ha trobat.
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  };
  
  // En cas de que el callback sigui onSuccess rep com a paràmetre un objecte amb propietat 'name' i mostra el nom de l'usuari trobat per pantalla.
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  
  // De lo contrari el Callback onErrorRep mostra el missatge d'error per pantalla.
  const onError = ({ msg }) => console.log(msg);
  
  // L'array d'usuaris té un objecte amb propietats 'name' i 'rol'.
  const users = [
    {       
      name: 'Carlos', //usuari amb nom 'Carlos' i el rol 'Teacher'
      rol: 'Teacher'  
    },
    {
      name: 'Ana',    //usuari amb nom 'Ana' i el rol 'Boss'
      rol: 'Boss'     
    }
  ];
  
  // Mostra un missatge inicial indicant comença a fer una cerca on serà correcta.
  console.log('findOne success');
  
  // Crida la funció findOne buscant l'usuari amb el nom 'Carlos' dins de l'array 'users'.
  // Passa els callbacks onSuccess i onError per gestionar el resultat.
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  
  // Mostra un missatge inicial indicant comença a fer una cerca on serà incorrecta.
  console.log('findOne error');
  
  // Crida la funció findOne buscant l'usuari amb el nom 'Fermin', que no existeix a l'array 'users'.
  // Passa els callbacks onSuccess i onError per gestionar el resultat.
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  

  