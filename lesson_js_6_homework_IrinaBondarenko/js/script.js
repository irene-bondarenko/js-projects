document.addEventListener("DOMContentLoaded", function () {

    const intField = document.querySelector(".input-field");
    const addBtn = document.querySelector(".button-add");

    let listWrapper = document.querySelector(".list-wrapper")

    let arrTasks;

    if (localStorage.tasks) {
        arrTasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
        arrTasks = [];
    };

    function newTask(taskText) {
        this.taskText = taskText;
        this.status = false;
    }

    const refreshLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    };
    const addNewTask = () => {
        if (intField.value =="") {
            alert("Задача не может быть пустой! Напишите, что нужно сделать :)")
        } else {
        arrTasks.push(new newTask(intField.value));
        refreshLocalStorage();
        showTaskList();
            intField.value = null;
        };
    };
   
    const createRow = (elem, index) => {
        return `
        <label>
        <div class="task-row ${elem.status ? "task-row--checked" : ""}">
            <h3 class="task-title">${elem.taskText}</h3>
            <input class="task-status custom-checkbox" type="checkbox" ${elem.status ? "checked" : ""} data-index="${index}">
            <button class="button button-delete" data-index="${index}"><i class="fas fa-trash-alt"></i></button>
        </div>
        </label>
        `;
    };

    const showTaskList = () => {
        listWrapper.innerHTML = "";
        arrTasks.forEach((elem, index) => {
            listWrapper.innerHTML += createRow(elem, index);
        });

        const taskCheckbox = document.querySelectorAll(".task-status");
        const deleteBtn = document.querySelectorAll(".button-delete");
        
        taskCheckbox.forEach(elem => { 
            elem.addEventListener("change", checkTask);
        });
        deleteBtn.forEach(elem => { 
            elem.addEventListener("click", deleteTask);
        });
    };

    function checkTask() {
        arrTasks[this.dataset.index].status = !arrTasks[this.dataset.index].status;
        refreshLocalStorage();
        showTaskList();
    };

    function deleteTask() {
        arrTasks.splice(this.dataset.index, 1);
        refreshLocalStorage();
        showTaskList();
    };

    showTaskList();

    addBtn.onclick = addNewTask;

    document.addEventListener("keyup", function (evt) {
        if (evt.code == "Enter" || evt.key == "Enter") {
            addNewTask();
        };
    });

});
