
const $$ = document.querySelector.bind(document);

const taskField = $$(".input-field");
const addTaskBtn = $$(".addTask");
const taskList = $$(".task-list");
var tasks = [];
let TaskArrayLC = [];
let li;
let completeBtn, removeBtn, containerBtn;
addTaskBtn.addEventListener("click", AddTask);
window.onload = function () {
    const myTasks = getAllFromLC();
}

function CreateTaskElement (TaskValue) {
 
    tasks.push({
        task: TaskValue,
        isComplete: false,
    })
    li = document.createElement("li");
    const p = document.createElement("p");
    if (TaskValue.toString().length  > 0)
    {
        p.innerText = TaskValue;
    }

    li.appendChild(p);
    CreateButton();  
    taskList.appendChild(li);
    saveLC(tasks); 
   
}
function CreateButton () {

    completeBtn = document.createElement("button");
    removeBtn = document.createElement("button");
    containerBtn = document.createElement("div");
    completeBtn.innerHTML = `<i class="fa-regular fa-circle-check completeBtn"></i>`;
    completeBtn.classList.add("complete");
    removeBtn.innerHTML = `<i class="fa-solid fa-circle-xmark removeBtn"></i>`
    removeBtn.classList.add("cancel")
    containerBtn.appendChild(completeBtn);
    containerBtn.appendChild(removeBtn);
    li.appendChild(containerBtn);
}
//Handle AddTask
function AddTask (e) {
    
    let task = taskField.value;
    CreateTaskElement(task);
 
    
    e.preventDefault(); 
    completeBtn.onclick = function (e) {
            
        const taskElement = this.parentElement.parentElement.childNodes[0];
        completeTask(taskElement);
        e.preventDefault(); 
    
    }
    removeBtn.onclick = function (e) {
          
        const taskElement = this.parentElement.parentElement;
        removeTask(taskElement);
        e.preventDefault(); 
    }     
}

function completeTask (taskElement) {
    taskElement.style.textDecoration = "line-through";
    // let task = taskField.value;
    // CreateTaskElement(task);
    // const objectWeNeed = objectsArr.filter((object) => {
    //     return object.age === 21;
    //   });
    // tasks.push({
    //     task: task,
    //     isComplete: false,
    // })

}
function removeTask(taskElement) {
    taskElement.remove();   
}

//function Save to localstorage
function saveLC(tasks) {
    localStorage.setItem("task", JSON.stringify(tasks));
}
function getAllFromLC() {
    const str = localStorage.getItem("task");
    TaskArrayLC = JSON.parse(str);
    console.log(TaskArrayLC);
    for(let i =0; i< TaskArrayLC.length; i++){
        CreateTaskElement(TaskArrayLC[i].task);
    }
}
function removeLC(taskElement) {
    localStorage.removeItem("tasks");
}

// function updateTask(li) {

//     //console.log(taskList);

//     // const tasks = document.querySelectorAll(".task-list li");
  
//     console.log(li);

//     // completeBtn.onClick = function () {
//     //     e.preventDefault(); 
//     //     const taskElement = this.parentElement.parentElement;
//     //     console.log(taskElement);
//     // }
//     // const cBtn = document.querySelectorAll(".completeBtn");

//     // console.log(tasks);
//     // for (let i = 0; i < cBtn.length; i++)
//     // {
//         // console.log(completeBtn[i]);
  

//         // cBtn.addEventListener("click", function(e) {
//         //     console.log(this.tasks);
//         //    e.preventDefault(); 
//         // //     console.log("nên")
//         // // console.log(this.tasks[i].innerText);
//         // });
    
//     // }
// }

// const cBtn = document.querySelectorAll(".completeBtn");
// console.log(cBtn);
// // for (let i = 0; i < cBtn.length; i++)
    
// // {

// //     cBtn.addEventListener("click", function(e) {

// //         const taskElement = this.parentElement.parentElement;
// //         console.log(taskElement);
// //         e.preventDefault(); 
// // })
// // }
