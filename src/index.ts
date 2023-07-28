import "./style.scss";
import { TodoList } from "./model/todo";
import { TODO_STATUS } from "./constants/todo";

const form: HTMLFormElement = document.querySelector(".form");
const todoList = document.querySelector(".task-list");
const btnMenu = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu-list");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("menu-btn-active");
  menuList.classList.toggle("show");
});

window.onclick = function (event) {
  if (
    !event.target.matches(".menu-list") &&
    !event.target.matches(".menu-btn")
  ) {
    btnMenu.classList.remove("menu-btn-active");
    menuList.classList.remove("show");
  }
};

////////////////TODO FUNCTIONAL/////

const todoListModel = new TodoList(form, todoList);

document.addEventListener("DOMContentLoaded", () => {
  todoListModel.init();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  todoListModel.addTodoItem();
});

todoList.addEventListener("click", (event) => {
  if ((event.target as HTMLElement).closest('[data-id="deleteBtn"]')) {
    const currentItem = (event.target as HTMLElement).closest(
      '[data-id="taskItem"]',
    );
    todoListModel.removeTodoItem(currentItem.id);
    currentItem.remove();
  }
});

todoList.addEventListener("change", (event) => {
  const value = (event.target as HTMLSelectElement).value;
  const currentItem = (event.target as HTMLElement).closest(
    '[data-id="taskItem"]',
  );
  todoListModel.changeTodoStatus(currentItem.id, value as TODO_STATUS);
});
