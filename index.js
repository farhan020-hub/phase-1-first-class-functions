function receivesAFunction(callback) {
   
    
    callback();  
}

receivesAFunction(callbackSpy);

console.log(callbackSpy.called); 


function returnsANamedFunction() {
    function namedFunction() {
       
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        
    };  
    
}