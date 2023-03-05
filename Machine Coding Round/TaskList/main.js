import "./style.css";

const form = document.querySelector(".formTask");
const inputFeild = document.querySelector(".addTask");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = inputFeild.value;
  inputFeild.value = "";

  const markup = `
            <div class="task">
              <div class="content">
                <input type="text" class="text" value="${newTask}" readonly />
              </div>
              <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
              </div>
            </div>
  `;
  tasks.insertAdjacentHTML("afterbegin", markup);
  const edit = document.querySelector(".edit");
  const text = document.querySelector(".text");
  const del = document.querySelector(".delete");

  edit.addEventListener("click", () => {
    if (edit.textContent === "Edit") {
      text.removeAttribute("readonly");
      text.focus();
      edit.textContent = "Save";
    } else {
      text.setAttribute("readonly", "readonly");
      edit.textContent = "Edit";
    }
  });
  del.addEventListener("click", () => {
    del.parentElement.parentElement.remove();
  });
});
