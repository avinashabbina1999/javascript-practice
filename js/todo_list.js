const todoList = []

function displayTodo(){
    let todoListHTML = '';
    for(let i=0;i<todoList.length;i++){
        todoListHTML += `<p>${todoList[i]}</p>`;
    }
    const addElement = document.querySelector('.js-add-todo');
    addElement.innerHTML = todoListHTML
}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    inputElement.value = '';
    displayTodo();
}