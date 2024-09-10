const todoList = []
const dateList = []

function displayTodo(){
    let todoListHTML = '';
    for(let i=0;i<todoList.length;i++){
        todoListHTML += `<p>
        ${todoList[i]}
        </p>`
        todoListHTML += `<p>
        ${dateList[i]}
        </p>`
        todoListHTML += `<p>
        <button onclick="
        todoList.splice(${i},1);
        dateList.splice(${i},1);
        displayTodo();
        " class="css-delete">DELETE</button>
        </p>`;
    }
    const addElement = document.querySelector('.js-add-todo');
    addElement.innerHTML = todoListHTML
}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dueElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const date = dueElement.value;
    todoList.push(name);
    dateList.push(date);
    inputElement.value = '';
    dueElement.value = '';
    displayTodo();
}