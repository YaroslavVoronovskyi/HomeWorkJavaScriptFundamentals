let user;
alert(user ?? "Anonymous");

let user1 = "John";

alert(user1 ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous");