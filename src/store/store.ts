import {ITodoItem} from "../interfaces/todo";
import {TODO_STATUS} from "../constants/todo";

export class Store {

    static getAllTodos(): ITodoItem[] {
        return JSON.parse(localStorage.getItem('tasks'))
    }
    static addTodo(todo: ITodoItem) {
        if(!localStorage.getItem('tasks')){
            localStorage.setItem('tasks', JSON.stringify([todo]));
            return;
        }

        const taskList:ITodoItem[] = JSON.parse(localStorage.getItem('tasks'))
        taskList.push(todo)
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    static updateStatus(id: string, status: TODO_STATUS) {
        const taskList:ITodoItem[] = JSON.parse(localStorage.getItem('tasks'))
        const indexTask = taskList.findIndex((task) => task.id === id)
        taskList[indexTask].status = status
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    static deleteTodoItem(id: string) {
        const taskList:ITodoItem[] = JSON.parse(localStorage.getItem('tasks'))
        const filteredList = taskList.filter((task) => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(filteredList));
    }
}