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

const $ = document.querySelector.bind(document);

const table = $("table");


fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then((user) => ShowData(user))
// .catch(err => console.log(err))
let tableBody;

//for each tra ve tung phan tu
//map tra ve mang
function ShowData(datas) {
    datas.map((data) => {
        tableBody = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.username}</td>
        <td>${data.email}</td>
        <td>${data.address.street}, ${data.address.suite}, ${data.address.city}</td>
        <td>${data.address.zipcode}</td>
        <td>${data.phone}</td>
        `
      
        table.innerHTML += tableBody;
        
    })
}
