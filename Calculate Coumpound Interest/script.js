let p = Number(prompt("Enter principal"));
let r = Number(prompt("Enter rate"));
let t = Number(prompt("Enter time"));

console.log(p*Math.pow(1+r/100, t)- p);