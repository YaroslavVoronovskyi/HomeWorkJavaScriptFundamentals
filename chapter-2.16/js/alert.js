// let saiHi = function () {
// 	alert("Hello");
// 	console.log("Hello");
// };

// alert(saiHi);

// let func = saiHi;
// func();
// saiHi();

// function ask(question, yes, no) { 
// 	if (confirm(question)) {
// 		yes();
// 	} else { 
// 		no();
// 	}
// }

// function showOk() { 
// 	alert("You agreed.");
// }

// function showCancel() {
// 	alert("You canceled the execution.");
// }

// ask("Do you agree?", showOk, showCancel);

function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}

ask("Do ypu agree?",
	function () {
	alert("You agreed.");
},
	function () {
		alert("YOu cancelrd the execution.");
	}
);

let age = prompt("What is your age?", 18);
let welcome;
if (age < 180) {
	welcome = function () {
		alert("Hello!");
	};
} else { 
	welcome = function () {
		alert("Freeting!");
	};
}
welcome();