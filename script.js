// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li)
        const li = document.createElement('li');

        // Create a text node for the task text and append to li
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add click event to remove the task when the button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the li
        li.appendChild(removeBtn);

        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key press in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
