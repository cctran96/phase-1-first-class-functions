function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return function sayHello() {
        return `Hello`
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return `Hello`
    }
}