const somethingWillHappen = () => { 
  
  return new Promise ((resolve, reject) => { 
    if (true) { 
      resolve ('Hey!');   // ? el resolve es el que le pasa los datos al .then
    } else { 
      reject ('Noooope');   // ? el reject le pasa los datos al .catch
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response, 'es el then'))
  .catch(err => console.error(err, 'es el catch'));



      // ? Promesas usando setTimeOut


const somethingWillHappen2 = () => { 
  
  return new Promise((resolve, reject) => { 
    if (true) { 
      setTimeout (() => { 
        resolve('True desde el resolve: ');
      }, 2000)
    } else { 
      const error = new Error ('Noooope 2.0');
      reject(error)
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response, 'es el .then pero con delay'))
  .catch(error => console.error(error, 'es el catch'))



