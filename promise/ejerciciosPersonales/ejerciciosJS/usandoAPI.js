'use strict' 
window.addEventListener('load', () => {

//require('isomorphic-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(x => x.json()) // con esto la convertimos a un JSON
  .then(x => console.log(x))


























})