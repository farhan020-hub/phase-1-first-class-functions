function receivesAFunction(callback) {
   
    
    callback();  
}

receivesAFunction(callback);

console.log(callback); 


function returnsANamedFunction() {
    function namedFunction() {
       
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {

    };  
    
}