const somethingWillHappen = () => { 
    return new Promise((resolve, reject) => { 
        if (false) { // si da TRUE hara el Resolve si da FALSE mostrara el reject
            resolve(`Heeey!`);
        } else { 
            reject(`Whooooops`);
        };
    });
};

somethingWillHappen()
.then(response => console.log(response)) //then es para cuando se ejecuta el resolve.
.catch(err => console.error(err));  //catch es para cuando se ejecuta el reject.

//===================================================

const somethingWillHappen2 = () => { 
    return new Promise((resolve, reject) => { 
        if (true) { 
            setTimeout(() => { 
                resolve('True');
            }, 2000)
        } else { 
            const error = new Error('Whooops!');
            reject(error);
        }
    });
}

somethingWillHappen2 ()
.then(response => console.log(response))
.catch (err => console.log(err)); 

//==================================================

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => { 
    console.log('Array of results', response);
})
.catch(err => { 
    console.error(err);
})

