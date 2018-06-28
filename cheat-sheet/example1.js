// adding a string with a number
console.log(0 + 'a')

console.log('a' + 0)

// comparison craziness
var x = [0];

console.log(x);
console.log(x == x);
console.log(x == !x);

// type logic
console.log(typeof NaN);
console.log(NaN === NaN);

console.log(typeof null);
console.log(null instanceof Object);

console.log("string" instanceof String);

// bounds
console.log(9999999999999999);
console.log(0.1 + 0.2 == 0.3);

console.log(Math.max() > Math.min());
console.log(Math.max() < Math.min());

// fun with arrays
console.log([] + []);
console.log([] + {});
console.log(new Array() == false);

// boolean arithmetic
console.log(true + true === 2);
console.log(true - true === 0);
console.log(true === 1);

// magic
console.log( ( ! + [] + [] + ![] ).length );

var a = "asd";
a[2] = 'e';
