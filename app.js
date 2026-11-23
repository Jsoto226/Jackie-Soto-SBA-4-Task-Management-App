// console.log("JavaScript is connected.");
// //////////////////////////////////////////////////////////
// Step 2. Adding HTML elements for updates and legibility //
// //////////////////////////////////////////////////////////

const taskForm = document.querySelector("#task-form");
const taskNameInput = document.querySelector("#task-name");
const taskCategorySelect = document.querySelector("#task-category");
const taskDeadlineInput = document.querySelector("#task-deadline");
const taskStatusSelect = document.querySelector("#task-status");
const filterStatusSelect = document.querySelector("#filter-status");
const filterCategorySelect = document.querySelector("#filter-catergory");
const taskListContainer = document.querySelector("#task-list");

console.log("form:", taskForm);

// ///////////////////////////////////////
// Step 3. Making task board functional //
// ///////////////////////////////////////

let tasks = [];
function addTask(event){
    event.preventDetault();

    const newTask = {
        id: Date.now(),
        name: taskNameInput.value.trim(),
        category: taskCategorySelect.value,
        deadline: taskDeadlineInput.value,
        status: taskStatusSelect.value,
    };

    tasks.push(newTask);

    console.log("New task created:", newTask);
    console.log("Order board (all tasks):", tasks);

    taskForm.reset();
}
taskForm.addEventListener("submit", addTask);