const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
//fucntions
function addTodo(event){
    event.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")   

    const newTodo = document.createElement('li')
    newTodo.innerHTML =todoInput.value
    todoInput.value = ""
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}
function deleteCheck(e){
    const item = e.target
    if (item.classList[0]==='trash-btn'){
        let temp = item.parentElement
        temp.classList.add('fall')
        setTimeout(function(){temp.remove()},800)
    }else if (item.classList[0]==='complete-btn'){
        let temp = item.parentElement
        temp.classList.toggle("completed")
    }
}

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click',deleteCheck)