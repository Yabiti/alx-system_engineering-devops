var operations = {
    sum: function(x ,y){return x + y;},
    divide: function(x , y){return x / y},
    subtract: function(x , y){return x - y},
    multiply: function(x , y){return x * y},
    modulo: function(x , y){return x % y}
    
}

console.log(operations.multiply(5, 10));
console.log(operations.sum(5, 10));
console.log(operations.divide(10, 10));
console.log(operations.subtract(10, 5));
console.log(operations.modulo(12, 10));