const input = document.getElementById("task-input")
const addBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")

// create new tasks
addBtn.addEventListener('click', () => {

    // Store the text in a variable
    const text = input.value.trim() //trim() to sanitize user input
    // create a new li
    if (text === "") return // prevent empty tasks

    const newTask = document.createElement('li')
    // store the text inside the new li
    newTask.textContent = text
    // always add the "task" class
    newTask.classList.add('taskPending')

    // append it to the existing ul
    taskList.appendChild(newTask)

    // create a delete btn
    const delBtn = document.createElement('button')
    delBtn.innerText = 'Delete Task'
    delBtn.classList.add('delete-btn')

    // remove new task
    delBtn.addEventListener('click', () => {
        newTask.remove()
    })

    // append the del btn to the task
    newTask.appendChild(delBtn)

    //clear input field
    input.value = ""
})

// change taks to completed
taskList.addEventListener('click', (e) => {
    const task = e.target

    // mark as completed or pending
    if (task.className === 'taskPending') {
        task.className = 'taskCompleted'
    }
    else {
        task.className = 'taskPending'
    }
})
