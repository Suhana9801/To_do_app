let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const task = {
            text: taskText,
            completed: false,
            addedAt: new Date()
        };
        
        tasks.push(task);
        updateTaskLists();
        
        taskInput.value = '';
    }
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskLists();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskLists();
}

function updateTaskLists() {
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
    
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="edit" onclick="toggleTaskCompletion(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        
        if (task.completed) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    });
}

updateTaskLists();
