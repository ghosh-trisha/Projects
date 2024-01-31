document.addEventListener('DOMContentLoaded', function () {
    let user = JSON.parse(localStorage.getItem("user"));
  
    if (user) {
      // User is logged in
      loadTasks(user);
    } else {
      // User is not logged in
      loginForm();
    }
});

function loginForm() {
    let app = document.getElementById('app');
    app.innerHTML = `
      <h2>Create an Account</h2>
      <form id="logForm">
        <label for="username">Username:</label>
        <input type="text" id="username" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" required><br>
        <button type="submit">Create Account</button>
      </form>
    `;
  
    let logForm = document.getElementById('logForm');
    logForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var user = { username, password };
  
      // Save user to local storage
    //   localStorage.setItem("tasks", JSON.stringify(user));
    localStorage.setItem(username, JSON.stringify(user));
  
      // Render the to-do app
      loadTasks(user);
    });
}
  


function getTasksFromLocalStorage() {
    // Get tasks from local storage
    // var tasksJson = localStorage.getItem("tasks");
    var tasksJson = localStorage.getItem(username);
    return JSON.parse(tasksJson) || [];
}

function saveTasksToLocalStorage(tasks) {
    // Save tasks to local storage
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem(username, JSON.stringify(tasks));
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
    display();
}

function loadTasks(user) {
    // add the task to the todo list

    let app = document.getElementById('app');
    app.innerHTML =
    `<div id="todoList">
        <h1>Hello, ${user.username}!  -->  To-Do List</h1>
        <input type="text" id="newTask" placeholder="New task">
        <button id="addTask">Add</button>
        <button id="clearButton" >Clear All</button>
    
        <ul id="tasks"></ul>

        <button id="logoutBtn">Logout</button>
    </div>`;

    let addTaskBtn=document.getElementById('addTask');
    addTaskBtn.addEventListener("click",addTask);

    let clearAllTasksBtn=document.getElementById('clearButton');
    clearAllTasksBtn.addEventListener("click",clearAllTasks);
    
    display();

    // logout button
    let logBtn = document.getElementById('logoutBtn');
    logBtn.addEventListener("click", function () {
        // Remove user from local storage
        localStorage.removeItem(user);
    
        // show the login form
        loginForm();
      });
}
function display(){
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
        <button id="editTask">Edit</button>
        <button id="removeTask">Remove</button>
      `;

        let editTaskBtn=document.getElementById('editTask');
        editTaskBtn.addEventListener("click",function () {
            editTask(task.id);
          });

        let removeTaskBtn=document.getElementById('removeTask');
        removeTaskBtn.addEventListener("click",function () {
            removeTask(task.id);
          });

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
    display();
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
        display();
    }
}

  
function clearAllTasks() {
    // Function to clear all tasks

    // Ask for confirmation before clearing all tasks
    if (confirm("Are you sure you want to clear all tasks?")) {
        
        // Save an empty array to local storage
        saveTasksToLocalStorage([]);

        // Update the todo list
        display();
    }
}
