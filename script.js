const input = document.getElementById("task-input")
const addBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")

// When the button is pressed, create new li
addBtn.addEventListener('click', () => {

    // Store the text in a variable
    const text = input.value.trim() //trim() to sanitize user input

    // create a new li
    if (text === "") return // prevent empty tasks
    const newTask = document.createElement('li')

    // store the text inside the new li
    newTask.textContent = text

    // append it to the existing ul
    taskList.appendChild(newTask)

})