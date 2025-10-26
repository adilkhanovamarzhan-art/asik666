console.log("Marzhan Adilkhanova - MT-2405");
alert("Hello, JavaScript World!");

function task0() {
    console.log("Task 0 executed by Marzhan Adilkhanova, Group MT-2405");
    alert("Hello, JavaScript World!");
}

function task1() {
    let name = "Marzhan";
    let num = 10;
    let isStudent = true;
    let sum = num + 5;
    document.getElementById("result1").innerText =
        `Name: ${name}, Number: ${num}, Is Student: ${isStudent}, Sum: ${sum}`;
    console.log(name + " - " + num + " - " + isStudent + " - " + sum);
}

function changeText() {
    document.getElementById("text").innerText = "The paragraph text has been changed!";
}

function changeBackground() {
    document.getElementById("styleBox").style.backgroundColor = "#FF6F61";
}

function changeFontSize() {
    document.getElementById("styleBox").style.fontSize = "24px";
}

function addItem() {
    const list = document.getElementById("itemList");
    const li = document.createElement("li");
    li.textContent = "New item";
    list.appendChild(li);
}

function removeItem() {
    const list = document.getElementById("itemList");
    if (list.lastChild) list.removeChild(list.lastChild);
}

const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "#FF6F61";
});
colorBox.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = "#444";
});

document.getElementById("textInput").addEventListener("keyup", function() {
    document.getElementById("displayText").innerText = this.value;
});

document.getElementById("validationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");
    if (!name || !email || !password) {
        errorMsg.textContent = "Please fill all fields!";
        errorMsg.style.color = "#FF6F61";
    } else {
        errorMsg.textContent = "Form submitted successfully!";
        errorMsg.style.color = "#00cc88";
    }
});

let tasks = [];
function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;
    tasks.push(input.value);
    renderTasks();
    input.value = "";
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => li.classList.toggle("completed");
        const del = document.createElement("button");
        del.textContent = "Delete";
        del.onclick = () => { tasks.splice(i, 1); renderTasks(); };
        li.appendChild(del);
        list.appendChild(li);
    });
}
