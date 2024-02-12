let object = { a: 1, b: "string" };
let object2 = { ...object };


object2.a = 2;
object2.b = "value";

console.log(object, object2);
console.log(Object.entries(object2));

let object3 = {
	a: {
		b: {
			c: {
				d: 2
			}
		}
	}
}

let object4 = { ...object3 };
console.log(Object.entries(object3));
// object4.a.b.c.b = 100;
// object4.a = 1;
// object4.b = 2;
// object4.c = 3;
// object4.d = 4;
console.log(Object.entries(object4));

let object5 = {
	a: 2,
	b: 3,
	c: 4
};

let object6 = { ...object5 };

console.log(Object.entries(object6));
console.log(object6);
console.log(object4);

let object7 = Object.assign({}, object3);
object7.c = 100;
console.log(object7);
console.log(object3);

console.log(Object.keys(object5));
console.log(Object.values(object5));

