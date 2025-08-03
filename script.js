document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');

        // Create a span for the task text for better control
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);

        taskList.appendChild(li);

        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false: don't save again
    }

    // Add a new task
    // save = true means save to localStorage, false means skip (used when loading)
    function addTask(taskTextParam, save = true) {
        // If called without param, get text from input
        const taskText = taskTextParam !== undefined ? taskTextParam : taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create li element
        const li = document.createElement('li');

        // Create span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove task event
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input only if adding a new task manually
        if (taskTextParam === undefined) {
            taskInput.value = "";
        }

        // Save to localStorage if needed
        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // Save a task string to localStorage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove a task string from localStorage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Event listeners
    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial load
    loadTasks();
});

