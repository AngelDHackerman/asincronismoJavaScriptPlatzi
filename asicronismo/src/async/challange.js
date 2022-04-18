const fetchData = require ('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => { 
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);   // ? hace la primera consulta, y pide el primer personaje de la lista
    const origin = await fetchData(character.origin.url);
    
    console.log(data.info.count); // Cuenta el listado de personajes en la API
    console.log(character.name); // Nos da el nombre del primer personaje en la lista de la API
    console.log(origin.dimension); // Da la dimension donde se encuentra el personaje que seleccionamos que es el primero [0]
    
  } catch (error) { 
    console.error(error);
  }
}

console.log('Before')
anotherFunction(API);
console.log('After');