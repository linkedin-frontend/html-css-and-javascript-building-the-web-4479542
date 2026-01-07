// 1️⃣ Select elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// 2️⃣ Function to add new task
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return; // prevent empty tasks

  // 3️⃣ Create new li element
  const li = document.createElement("li");

  // 4️⃣ Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // 5️⃣ Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  // 6️⃣ Append text and button to li
  li.appendChild(span);
  li.appendChild(delBtn);

  // 7️⃣ Append li to ul
  todoList.appendChild(li);

  // 8️⃣ Clear input
  input.value = "";

  // 9️⃣ Mark as done on click
  span.addEventListener("click", () => {
    span.classList.toggle("done");
  });

  // 10️⃣ Delete task
  delBtn.addEventListener("click", () => {
    li.remove();
  });
}

// 11️⃣ Add task on button click
addBtn.addEventListener("click", addTask);

// 12️⃣ Add task on Enter key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
