let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function(){
    const userInput = taskInput.value;//take user input
    if (userInput === ""){
        return;
    }
    tasks.push(userInput);//into arr backend

    //js -> hml
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //<li><input ="checkbox"></li>
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){
    newTask.remove();

    tasks = tasks.filter(function(task){
        return task !== userInput;
    });
});

    //check/unchecked behavior for check box
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            newTask.style.textDecoration = "line-through";
        }else{
            newTask.style.textDecoration = "none";
        }
    });

    //nested elements
    //always checkbox in li. li in tasklist
    newTask.appendChild(checkbox);//DOM insertion
    newTask.append(" " + userInput);
    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);

    taskInput.value = "";//clear
});



