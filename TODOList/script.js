function AddTask() {
    let input = document.getElementById("text");
    let taskText = input.value;

    if (taskText.trim() === "") {
        alert("Write the task first!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskText;

    li.onclick = function () {
        li.classList.toggle("done");
    };
    let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.onclick = function () {
    li.remove();
};

li.appendChild(deleteBtn);

let ModifyBtn = document.createElement("button");
ModifyBtn.innerText = "Edit";
ModifyBtn.onclick = function () {
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