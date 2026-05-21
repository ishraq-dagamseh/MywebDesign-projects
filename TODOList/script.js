function AddTask() {
    let input = document.getElementById("text");
    let taskText = input.value;
    // check if the task text is empty
    if (taskText.trim() === "") {
        alert("Write the task first!");
        return;
    }
    // use createElement to Manipulating Structure of HTML by creating list when the user add new task
    let li = document.createElement("li");
    li.innerText = taskText;
    
    li.onclick = function () {
        li.classList.toggle("done");
    };
    // creat new deleting btn when the user add new task
    let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete"; //decide the text that appears on the button
deleteBtn.onclick = function () {
    li.remove();
};

//li.appendChild(deleteBtn);//Add an HTML element(deleteBtn)
    // creat new Editing btn when the user add new task

let ModifyBtn = document.createElement("button");
ModifyBtn.innerText = "Edit";//decide the text that appears on the button
ModifyBtn.onclick = function () { // what this button when clicked will do
    let newText=prompt("Edit Your task...", li.firstChild.textContent)
    if (newText !== null && newText.trim() !== "") {
        li.firstChild.textContent = newText;
    }
};
li.appendChild(ModifyBtn); 


li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}