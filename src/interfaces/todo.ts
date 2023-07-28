import {TODO_STATUS} from "../constants/todo";

export interface ITodoItem {
    id: string,
    title: string,
    status?: TODO_STATUS
}