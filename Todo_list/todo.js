function getTasksFromLocalStorage() {
    // Get tasks from local storage
    var tasksJson = localStorage.getItem("tasks");
    return JSON.parse(tasksJson) || [];
}

function saveTasksToLocalStorage(tasks) {
    // Save tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    // add the task to local storage

    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value.trim();
    if(taskText === ""){
        return;
    }

    // Get the tasks from local storage
    var tasks = getTasksFromLocalStorage();

    // Create a task object
    var task = {
      text: taskText,
      id: new Date().getTime(),
    };

    // Add the new task to local storage
    tasks.push(task);

    // Save tasks to local storage
    saveTasksToLocalStorage(tasks);

    // Clear the variable taskInput
    taskInput.value = "";

    // Update the task list
    loadTasks();
}

function loadTasks() {
    // add the task to the todo list
    
    // Get the tasks from local storage
    var tasks = getTasksFromLocalStorage();

    // Get the tasks element means ul tag
    var tasksElement = document.getElementById("tasks");

    // Clear the existing tasks within the ul tag
    tasksElement.innerHTML = "";

    // Add each task to the list
    tasks.forEach(function (task) {
      var li = document.createElement("li");
      li.innerHTML = `
        <span>${task.text}</span>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="removeTask(${task.id})">Remove</button>
      `;
      tasksElement.appendChild(li);
    });
}

function removeTask(id) {
    // Get the tasks from local storage
    var tasks = getTasksFromLocalStorage();

    // Remove the task with the given id
    var updatedTasks = tasks.filter(function (task) {
      return task.id !== id;
    });

    // Save updated tasks to local storage
    saveTasksToLocalStorage(updatedTasks);

    // Update the task list
    loadTasks();
}

function editTask(id) {
    // Get the tasks from local storage
    var tasks = getTasksFromLocalStorage();

    // Find the task with the given ID
    var taskToEdit = tasks.find(function (task) {
      return task.id === id;
    });

    // Prompt the user for a new task text
    var newText = prompt("Edit task:", taskToEdit.text);

    // Check if the user entered a new text (and did not click Cancel)
    if (newText !== null) {
        // Update the task text with the new text
        taskToEdit.text = newText.trim();

        // Save the updated tasks to local storage
        saveTasksToLocalStorage(tasks);

        // Update the todo list
        loadTasks();
    }
}

  
function clearAllTasks() {
    // Function to clear all tasks

    // Ask for confirmation before clearing all tasks
    if (confirm("Are you sure you want to clear all tasks?")) {
        
        // Save an empty array to local storage
        saveTasksToLocalStorage([]);

        // Update the todo list
        loadTasks();
    }
}
