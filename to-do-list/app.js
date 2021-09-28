const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const fillterOption = document.querySelector('.filter-todo')
//fucntions
function addTodo(event){
    event.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")   

    const newTodo = document.createElement('li')
    newTodo.innerHTML =todoInput.value
    //save to local 
    saveLocalTodos(todoInput.value)
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
        deleteFromLocal(temp.childNodes[0].innerHTML)
        temp.classList.add('fall')
        
        setTimeout(function(){temp.remove()},800)
    }else if (item.classList[0]==='complete-btn'){
        let temp = item.parentElement
        temp.classList.toggle("completed")
    }
}
function fillterTodo(e){
    const todos = todoList.childNodes
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex'
                break;
            case "completed":
                if (todo.classList.contains('completed'))
                {
                    todo.style.display = 'flex'
                }else {
                    todo.style.display = 'none'
                }
                break;
            case "uncompleted":
                if (todo.classList.contains('completed'))
                {
                    todo.style.display = 'none'
                }else {
                    todo.style.display = 'flex'
                }  
                break;
        }
    })
}
function saveLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos')===null){
        todos =[]
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}
function getTodos (){
    let todos;
    if (localStorage.getItem('todos')===null){
        todos =[]
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div')
        todoDiv.classList.add("todo")   

        const newTodo = document.createElement('li')
        newTodo.innerHTML =todo
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
    })
}
function deleteFromLocal(todo){
    let todos;
    if (localStorage.getItem('todos')===null){
        todos =[]
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todos.indexOf(todo)
    todos.splice(todoIndex,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click',deleteCheck)
fillterOption.addEventListener('click',fillterTodo)
getTodos()