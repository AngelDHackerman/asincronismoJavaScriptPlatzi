const doSomethingAsync = () => { 
  
  return new Promise ((resolve, reject) => { 
    (true)
      ? setTimeout(() => {
        
        return resolve('Haciendo algo Async')
      }, 3000)
      : reject(new Error('Error de prueba'));
  });
}

const doSomething = async () => { 
  const something = await doSomethingAsync();   // ? await, hace que la funcion doSomething 'espere' a la funcion doSomethingAsync
  console.log(something);
}

console.log('Antes');
doSomething();
console.log('Despues');



        // * Otro ejemplo 

const anotherFunction = async () => { 
  try { 
    const something = await doSomethingAsync();
    console.log(something);
    
  } catch (error) { 
    console.error(error);
  }
}

console.log('Antes 2');
anotherFunction();
console.log('Despues 2');