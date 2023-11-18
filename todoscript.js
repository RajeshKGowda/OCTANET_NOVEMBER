function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    var deadlineInput = document.getElementById('deadlineInput').value;
    var priorityInput = document.getElementById('priorityInput').value;
    var labelInput = document.getElementById('labelInput').value;

    if (taskInput === '') {
        alert('Please enter a task.');
        return;
    }

    var taskList = document.getElementById('taskList');
    var newTask = document.createElement('li');
    newTask.innerHTML = `
        <strong>${taskInput}</strong>
        <br>Deadline: ${deadlineInput}
        <br>Priority: ${priorityInput}
        <br>Label: ${labelInput}
        <button onclick="removeTask(this)">Remove</button>
	`;
    taskList.appendChild(newTask);

    // Clear input fields
    document.getElementById('taskInput').value = '';
    document.getElementById('deadlineInput').value = '';
    document.getElementById('priorityInput').value = 'low';
    document.getElementById('labelInput').value = '';
}

function removeTask(button) {
    var taskList = document.getElementById('taskList');
    var listItem = button.parentNode;
    taskList.removeChild(listItem);
}
