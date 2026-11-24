// console.log("JavaScript is connected.");
// //////////////////////////////////////////////////////////
// Step 2. Adding HTML elements for updates and legibility //
// //////////////////////////////////////////////////////////

const STORAGE_KEY = "taskManagerTasks"; //Following AI steps for task 5.
const taskForm = document.querySelector("#task-form");
const taskNameInput = document.querySelector("#task-name");
const taskCategorySelect = document.querySelector("#task-category");
const taskDeadlineInput = document.querySelector("#task-deadline");
const taskStatusSelect = document.querySelector("#task-status");
const filterStatusSelect = document.querySelector("#filter-status");
const filterCategorySelect = document.querySelector("#filter-category");
const taskListContainer = document.querySelector("#task-list");

// console.log("form:", taskForm);

// ///////////////////////////////////////
// Step 3. Making task board functional //
// ///////////////////////////////////////

let tasks = [];
function addTask(event) {
  event.preventDefault();

  const newTask = {
    id: Date.now(),
    name: taskNameInput.value.trim(),
    category: taskCategorySelect.value,
    deadline: taskDeadlineInput.value,
    status: taskStatusSelect.value,
  };

  tasks.push(newTask);
  checkOverdueTask();
  saveTask();
  renderTasks();

  console.log("New task created:", newTask);
  console.log("Order board (all tasks):", tasks);

  // console.log("New task created:", newTask);
  // console.log("Order board (all tasks):", tasks);

  taskForm.reset();
}
taskForm.addEventListener("submit", addTask);

function saveTask() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
} //Following AI steps for task 5.

function loadTasks() {
  const savedTasks = localStorage.getItem(STORAGE_KEY); //Following AI steps for task 5.

  if (savedTasks !== null) {
    task = JSON.parse(savedTasks);
  } else {
    tasks = [];
  }
} //Following AI steps for task 5.

// /////////////////////////////////////////////////////////////////////
// Step 4. Filtering tasks and adding functionality for overdue tasks //
// /////////////////////////////////////////////////////////////////////

function checkOverdueTask() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayString = `${year}-${month}-${day}`;

  tasks.forEach((task) => {
    if (task.status !== "Completed" && task.deadline < todayString) {
      task.status = "Overdue";
    }
  });

  // console.log("Today's date:", todayString);
  // console.log("After overdue check:", tasks);
}

// ///////////////////////////////////////////////////////////////////////////////////////
// Step 5. Persisting Task Data with Local Storage (Paul Okayed the use of AI for this) //
// ///////////////////////////////////////////////////////////////////////////////////////
function renderTasks() {
  taskListContainer.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.textContent = `
    ${task.name} |
    Category: ${task.category} |
    Deadline: ${task.deadline} |
    Status: ${getTaskStatus(task)}
    `;

    taskListContainer.appendChild(li);
  })
}