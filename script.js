const taskList = document.getElementById("taskList");

// 保存されたデータを読み込み
window.onload = function() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") return;

  addTaskToDOM(task);
  saveTask(task);

  input.value = "";
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "削除";
  btn.onclick = function() {
    li.remove();
    removeTask(task);
  };

  li.appendChild(btn);
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}