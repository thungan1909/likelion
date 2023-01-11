// let x = true;
// let promise = new Promise (function (resolve, reject)  {
//     if(x) {
//         resolve("OK");
//     }
//     else {
//         reject("Nope");
//     }

// })
// promise.then(
//     function(value) {console.log(value)},
//     function(err) {console.log(err)}
// )

let users =[];
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(user => users.push(user));



// const newUser = `<`
// const table = document.querySelector("table");
// table.append





