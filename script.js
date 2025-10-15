const input = document.getElementById("task-input")
const addBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")

// utility functions
function createTaskElement (text, className = 'taskPending') {
    const li = document.createElement('li');
    li.className = className;

    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete Task';
    delBtn.classList.add('delete-btn');
    li.appendChild(delBtn);

    return li;
}

function saveTasks() {
    const tasks = []
    document.querySelectorAll('#task-list li span').forEach(span => {
        tasks.push({
            text: span.textContent,
            className: span.parentElement.className
        })
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    savedTasks.forEach(task => {    
        taskList.appendChild(createTaskElement(task.text, task.className))
    });
}

// add new task
addBtn.addEventListener('click', () => {
    const text = input.value.trim() //trim() to sanitize user input
    if (!text) return;

    taskList.appendChild(createTaskElement(text));
    input.value = '';
    saveTasks()
})

taskList.addEventListener('click', (e) => {
    const li = e.target.closest('li'); //find li that was clicked
    if (!li) return;

    // toggle completed / pending
    if (e.target.tagName === 'SPAN') {
        li.classList.toggle('taskPending')
        li.classList.toggle('taskCompleted')
    } else if (e.target.classList.contains('delete-btn')) {
        // delete task
        li.remove();
    };

    saveTasks();
});

loadTasks()