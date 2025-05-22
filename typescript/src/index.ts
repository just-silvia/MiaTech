import { Todo, User } from "./types";

const todos: Todo[] = [];

//ESERCIZIO FUNZIONE addTodo

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

//ESERCIZIO FUNZIONE addTodoToUser

const addTodoToUser = (todoId: number, userId: number) => {
    const todo = todos.find(todo => todo.id == todoId);
    if(!todo) return false;
    todo.userId = userId;
    return true;
}

const result = addTodoToUser(1, 42);
console.log(result);
console.log(todos);