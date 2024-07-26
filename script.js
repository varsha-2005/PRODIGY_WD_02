var d1 = document.getElementById('d1');
var input = document.getElementById('input');
var tasks = document.getElementById('tasks');

function toggleInput() {
    d1.style.display = d1.style.display === 'none' ? 'flex' : 'none';
}

function addTask() {
    if (input.value) {
        var divItem = document.createElement('div');
        divItem.classList.add('task-item');
        divItem.innerHTML = `
            <span>${input.value}</span>
            <div>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        tasks.appendChild(divItem);
        input.value = '';
    } else {
        alert('Please add a task');
    }
}

function editTask(button) {
    var taskItem = button.parentElement.parentElement;
    var taskText = taskItem.querySelector('span').innerText;
    var newTaskText = prompt('Edit your task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span').innerText = newTaskText.trim();
    }
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}