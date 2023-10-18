
        let tasks = [];

        function createTask() {
            const taskInput = document.getElementById("taskInput");
            const taskName = taskInput.value.trim();

            if (taskName !== "") {
                tasks.push(taskName);
                taskInput.value = "";
                displayTasks();
            }
        }

        function displayTasks() {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            for (let i = 0; i < tasks.length; i++) {
                const listItem = document.createElement("li");
                listItem.textContent = tasks[i];
                listItem.innerHTML += ` <button onclick="updateTask(${i})">Edit</button>`;
                listItem.innerHTML += ` <button onclick="deleteTask(${i})">Delete</button>`;
                taskList.appendChild(listItem);
            }
        }

        function updateTask(index) {
            const newTaskName = prompt("Enter the updated task name:");
            
            if (newTaskName !== null && newTaskName.trim() !== "") {
                tasks[index] = newTaskName;
                displayTasks();
            }
        }

        function deleteTask(index) {
            if (index >= 0 && index < tasks.length) {
                tasks.splice(index, 1);
                displayTasks();
            }
        }
        
        
        displayTasks();
