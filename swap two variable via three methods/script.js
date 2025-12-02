// method 1
let a = 10;
let b = 20;

let temp = a;
a = b;
b= temp;
console.log(a,b)

// method 2
let c = 10;
let d = 20;

c = c+d;
d = c - d;
c = c - d;
console.log(c,d)

// method 3

let e = 10;
let f = 20;

[e,f] = [f,e]

console.log(e,f)