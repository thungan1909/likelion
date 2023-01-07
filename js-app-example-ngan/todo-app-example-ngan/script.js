
const $ = document.querySelector.bind(document);

const taskField = $(".input-field");
const addTaskBtn = $(".addTask");
const taskList = $(".task-list");
var tasksArrayFromInput = [];
let taskArrayFromLS = [];
let task ;
addTaskBtn.addEventListener("click", validateTask);
window.onload = function (e) {
    const myTasks = getAllFromLS();
    if (Array.isArray(myTasks)) {
        for (let i = 0; i < myTasks.length ; i++) {
            CreateTaskElement(myTasks[i].task);
            CreateButton(e);
        }
    }
};


//function
//function Save to localstorage
function saveToLC(tasks) {
    localStorage.setItem("task", JSON.stringify(tasks));
}
function getAllFromLS() {
    let myTask = localStorage.getItem("task");
    taskArrayFromLS = JSON.parse(myTask);
    return taskArrayFromLS;
}

//validateTask 
function validateTask (e) {
    e.preventDefault();
    let isEmptyString = checkEmptyValue(taskField.value);
    if (isEmptyString) {
        AddTask();
        saveToLC(tasksArrayFromInput);
    }
    else {
        alert("Please enter your task!");
    }
}
function checkEmptyValue(value)
{
    if (value === "") {
        return false;
      } else {
        return true;
      }
}
 //Handle AddTask
function AddTask (e) {
    CreateTaskElement(taskField.value);
    CreateButton(e);
  
    //Reset task field
    taskField.value = "";
    //Re-focus task field   
    taskField.focus();
 
}
function CreateTaskElement (taskName) {

     task = document.createElement("li");
    task.style.cssText = `
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
     `;
     task.innerHTML = `<p>${taskName}</p>`;
    
     //push task to local storage array
    tasksArrayFromInput.push({
        task: task.textContent,
        isCompleted: false,
    });
    taskList.appendChild(task);
}
function CreateButton (e) {

    //Create div element to contain 2 button
    const containerBtn = document.createElement("div");
    containerBtn.classList.add("containerBtn");

    //Create 2 button: Complete and Remove
    //Button Complete
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = `<i class="fa-regular fa-circle-check completeBtn"></i>`;
 
    //Button Remove
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = `<i class="fa-solid fa-circle-xmark removeBtn"></i>`
    removeBtn.classList.add("removeBtn")

    //Append 2 button to container
    containerBtn.appendChild(completeBtn);
    containerBtn.appendChild(removeBtn);
    task.appendChild(containerBtn);

    //handle complete task
    completeBtn.onclick = function (e) {
        const taskElement = this.parentElement.parentElement.childNodes[0] ;
        e.preventDefault();
        completeTask(taskElement);
    }

    //handle remove task
   removeBtn.onclick = function (e) {
        const taskElement = this.parentElement.parentElement;
        e.preventDefault();
        removeTask(taskElement);
    };
}

function completeTask (taskElement) {
    taskElement.style.textDecoration = "line-through";
}
function removeTask(taskElement) {
    taskElement.remove();   
}


