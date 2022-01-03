function sum (num1, num2) { 
    return num1 + num2;
}

function calc(num1, num2, callback) { //se coloca el nombre callback para identificar que es un parametro que recivira una funcion como callback.
    return callback(num1, num2);
}

console.log(calc(6 ,2,sum));

//========================================================

function date (callback) { 
    console.log(new Date);

    setTimeout(function () { 
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate (dateNow) { 
    console.log(dateNow);
}

date(printDate);