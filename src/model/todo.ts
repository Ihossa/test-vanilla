import { ITodoItem } from "../interfaces/todo";
import { TODO_STATUS } from "../constants/todo";
import { Store } from "../store/store";
import { TodoItem } from "../components/Todo/TodoItem";

export class TodoList {
  form: HTMLFormElement;
  todoContainer: Element;

  constructor(form: HTMLFormElement, todoContainer: Element) {
    this.form = form;
    this.todoContainer = todoContainer;
  }

  init() {
    const todos = Store.getAllTodos();

    if (!todos) {
      return;
    }

    const container = document.createDocumentFragment();

    todos.forEach((todoItem) => {
      container.appendChild(TodoItem(todoItem));
    });

    this.todoContainer.appendChild(container);
  }

  addTodoItem() {
    const formData = new FormData(this.form);
    const title = formData.get("title");

    if (title === "") {
      return;
    }

    const generatedTask: ITodoItem = {
      id: Date.now().toString(),
      title: title.toString(),
      status: TODO_STATUS.PLAN,
    };

    Store.addTodo(generatedTask);
    this.todoContainer.appendChild(TodoItem(generatedTask));

    this.form.reset();
  }

  removeTodoItem(id: string) {
    Store.deleteTodoItem(id);
  }

  changeTodoStatus(id: string, status: TODO_STATUS) {
    Store.updateStatus(id, status);
  }
}
