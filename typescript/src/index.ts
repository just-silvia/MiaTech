import { Todo } from "./types";

const todos: Todo[] = [];

let newId = 1;

const addTodo = (obj: { title: string }): Todo => {
    const newTodo: Todo = {
        id: newId++,
        title: obj.title,
        completed: false
    };

    todos.push(newTodo);
    console.log(newTodo);

    return newTodo;
}

addTodo({ title: "lista di todo" });

