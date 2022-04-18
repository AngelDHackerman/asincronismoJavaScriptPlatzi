const fetchData = require ('../utils/fetchData.js');    // ? Importando el fetch data que creamos en utils
const API = 'https://rickandmortyapi.com/api/character/';    // ? URL de nuestra API, siempre verificar que tenga el / al final

fetchData(API)
  .then(data => { 
    console.log(data.info.count);   // ? data.info.count, esto es algo propio de la API
    
    return fetchData(`${API} ${data.results[0].id}`)    // ? primer request de los 3 que tenemos que hacerle a esta API
  })
  .then(data => { 
    console.log(data.name)

    return fetchData(data.origin.url)   // ? 2do, request que necesitamos hacerle a la API
  })
  .then(data => { 
    console.log(data.dimension)   // ? 3er y ultimo request, buscamos saber la dimension del personaje N.1 ( [0] )
  })
  .catch(err => console.error(err));



