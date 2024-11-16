const form = document.getElementById("to-do");
const taskinput = document.getElementById("text");
const list = document.getElementById("list")


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tasktext = taskinput.value.trim();
    if (tasktext) {
        addTask(tasktext);
        taskinput.value = "";
    } 
});

function addTask(tasktext) {

    const li = document.createElement("li");
    li.textContent = tasktext;

    const completebtn = document.createElement("button");
    completebtn.textContent = "Complete";

    completebtn.addEventListener('click', function() {
        li.classList.toggle("Completed");
    });

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";

    deletebtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(completebtn);
    li.appendChild(deletebtn);
    list.appendChild(li);
};