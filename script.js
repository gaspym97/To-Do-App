const input = document.getElementById("task-input")
const addBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")

// utility functions
function saveTasks() {
    const tasks = []

    document.querySelectorAll('#task-list li').forEach(task => {
        const text = task.querySelector('span').textContent
        tasks.push({
            text,
            className: task.className
        })
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// create new tasks
addBtn.addEventListener('click', () => {

    // Store the text in a variable
    const text = input.value.trim() //trim() to sanitize user input
    // create a new li
    if (text === "") return // prevent empty tasks

    const newTask = document.createElement('li')
    newTask.classList.add('taskPending')

    const span = document.createElement('span')
    span.textContent = text

    const delBtn = document.createElement('button')
    delBtn.innerText = 'Delete Task'
    delBtn.classList.add('delete-btn')

    delBtn.addEventListener('click', () => {
        newTask.remove()
        saveTasks()
    })

    newTask.appendChild(span)
    newTask.appendChild(delBtn)
    taskList.appendChild(newTask)

    saveTasks()
    //clear input field
    input.value = ""
})

// change taks to completed
taskList.addEventListener('click', (e) => {
    const task = e.target

    // mark as completed or pending
    if (task.tagName === 'SPAN') {
        task.classList.toggle('taskPending')
        task.classList.toggle('taskCompleted')
    }
})
