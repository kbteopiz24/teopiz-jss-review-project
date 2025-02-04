// Event listener for the "Add Task" button
document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    // Checkbox for marking tasks as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.onclick = function () {
        taskSpan.classList.toggle("completed");
    };

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.className = "task-text";

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = function () {
        const newText = prompt("Edit your task:", taskSpan.textContent);
        if (newText) {
            taskSpan.textContent = newText;
        }
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        const confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            taskList.removeChild(li);
        }
    };

    // Append elements to the task item (li)
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append the task item to the task list
    taskList.appendChild(li);

    // Clear the input field
    input.value = "";
}