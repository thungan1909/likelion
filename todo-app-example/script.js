
const $$ = document.querySelector.bind(document);

const taskField = $$(".input-field");
const addTaskBtn = $$(".addTask");
const taskList = $$(".task-list");




let li;
let task;
let count = 0;
// const myTaskListNode = [taskList];

let removeBtn, containerBtn;
let completeBtn;
completeBtn = document.createElement("button");

addTaskBtn.addEventListener("click", AddTask)


// function updateTimer() {
    
//     // count++;
//     console.log(taskList.length);
//     for (let i = 0; i < taskList.length; i++)
//     {
        
//         // console.log(taskList[i]);
//         // console.log(completeBtn[i]);
//         // completeBtn[i].addEventListener("click", () => {
//         //     taskList.remove(taskList[i]);
//         // });
//     }
   
// }

function AddTask (e) {
    li = document.createElement("li");
    const p = document.createElement("p");
    task = taskField.value;
    if (task.toString().length  > 0)
    {
        p.innerText = task;
        // Button
       
        removeBtn = document.createElement("button");
        containerBtn = document.createElement("div");
        console.log(completeBtn);
        completeBtn.innerHTML = `<i class="fa-regular fa-circle-check completeBtn"></i>`;
        completeBtn.classList.add("complete");
        removeBtn.innerHTML = `<i class="fa-solid fa-circle-xmark removeBtn"></i>`
        removeBtn.classList.add("cancel")
        containerBtn.appendChild(completeBtn);
        containerBtn.appendChild(removeBtn);
        li.appendChild(p);
        li.appendChild(containerBtn);
        taskList.appendChild(li);
        e.preventDefault(); 
       
    }
}

