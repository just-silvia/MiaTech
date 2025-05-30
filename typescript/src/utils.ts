import { Todo } from "./types";

function filterTodos<T>(arr: T[], predicate: (item: T) => boolean): T []{
  return arr.filter(predicate);
}

export type PartialTodo = Partial<Todo>;

//ESERCIZIO RECORD

export type TodoRecord = Record<number, Todo>;