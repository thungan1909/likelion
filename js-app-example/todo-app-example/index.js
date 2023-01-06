const $ = document.querySelector.bind(document);

const taskField = $("#taskField");
const addTaskBtn = $("#addTask");
const taskList = $(".task-list");
let tasksFromMe = [];
let tasksFromLS = [];

addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let isEmptyString = checkEmptyValue(taskField.value);
  if (isEmptyString) {
    handleAddTask();
    handleStoreTask(tasksFromMe);
  } else {
    alert("Please enter your task!");
  }
});

function handleAddTask() {
  createTaskElement(taskField.value);

  // Invoke action buttons
  actionBtns();

  // Reset field
  taskField.value = "";
  // Re-focus
  taskField.focus();
}

// Complete task
function completeTask(task) {
  task.style.textDecoration = "line-through";
}

// Remove task
function removeTask(task) {
  task.remove();
}

// Check empty value
function checkEmptyValue(value) {
  if (value === "") {
    return false;
  } else {
    return true;
  }
}

// Handle store tasks to localStorage
function handleStoreTask(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Handle get tasks from localStorage
function handleGetTasks() {
  tasksFromLS = localStorage.getItem("tasks");
  let myTaskList = JSON.parse(tasksFromLS);
  return myTaskList; // []
}

// Create task element
function createTaskElement(taskName) {
  task = document.createElement("li");
  task.style.cssText = `
        padding: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `;
  task.innerHTML = `<p>${taskName}</p>`;
  
  // Invoke function store task to LS
  tasksFromMe.push({
    task: task.textContent,
    isCompleted: false,
  });
  taskList.appendChild(task);
}

// Create action btns
function actionBtns() {
  /* Create 2 actions buttons: Complete, Remove */
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");

  // Complete btn
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerText = "OK";

  // Remove btn
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.innerText = "X";

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(removeBtn);
  task.appendChild(btnContainer);

  /* Handle complete task */
  completeBtn.onclick = function () {
    const taskElement = this.parentElement.parentElement.childNodes[0];
    completeTask(taskElement);
  };
  /* -------------------- */

  /* Handle remove task */
  removeBtn.onclick = function () {
    const taskElement = this.parentElement.parentElement;
    removeTask(taskElement);
  };
  /* ------------------ */
}

window.onload = function () {
  const myTasks = handleGetTasks(); // return []
  if (Array.isArray(myTasks)) {
    for (let i = 0; i < myTasks.length; i++) {
      createTaskElement(myTasks[i].task);
      actionBtns();
    }
  }
};
