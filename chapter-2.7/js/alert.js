let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

console.log("6" / "2");

let str = "123";
console.log(typeof str);

let number = Number(str);
console.log(typeof number);

let age = Number("an arbitrary string instead of a number");
console.log(age);

alert(Number("  123  "));
alert(Number("123 34 7"));