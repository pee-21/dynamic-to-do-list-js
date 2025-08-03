// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements for later use
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add click event to remove the task from the list
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the li
        li.appendChild(removeBtn);

        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = "";
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener to allow adding tasks by pressing 'Enter' key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
