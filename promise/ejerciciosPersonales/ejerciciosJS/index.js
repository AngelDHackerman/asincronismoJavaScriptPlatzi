'use strict'
window.addEventListener('load', () => { 


            //Promesas que se resuelven de manera inmediata


const promesa1 = Promise.resolve(1) // la promesa se resuelve inmediatamente y se resuelve con el valor de 1.

console.log(promesa1); //Podemos acceder al contenido de la promesa si fue resolve usando .then

promesa1
  .then(x => x + 5)//X fue sumado con 5 y retorno el valor a la siguiente promesa .then
  .then(x => Promise.resolve(x + 5)) //Aqui se pudo crear otra promesa dentro del .then
  .then(x => Promise.reject('Error! Algo salio mal'))
  .then(x => console.log(`ESTO NO SE VA IMPRIMIR EN PANTALLA, ${x}`))
  .catch(error => console.log(error)) // Podemos accerder al contendio de la promesa si fue reject usando .catch


              //Promesas que se resuelven en el futuro


/* const delay = (x) => {
  return new Promise ((resolve, reject) => { 
    setTimeout(() => {
      resolve(x)
    }, 1000);
  });
}; */
//La linea de arriba es exactamente lo mismo que la linea de abajo

const delay = x => { return new Promise( (resolve, reject) => {setTimeout(() => resolve(x), 1000)} )} //dentro del arrow function se esta haciendo un return

delay(7)
  .then (x => { 
    console.log(x)                //7
    return delay (x + 7)
  })
  .then (x => console.log(x))     //14
  .then (x => Promise.reject('Hubo un error :('))
  .catch ( err => console.log(err));















})