"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
//ESERCIZIO FUNZIONE addTodo
let newId = 1;
const addTodo = (obj) => {
    const newTodo = {
        id: newId++,
        title: obj.title,
        completed: false
    };
    todos.push(newTodo);
    console.log(newTodo);
    return newTodo;
};
addTodo({ title: "lista di todo" });
//ESERCIZIO FUNZIONE addTodoToUser
const addTodoToUser = (todoId, userId) => {
    const todo = todos.find(todo => todo.id == todoId);
    if (!todo)
        return false;
    todo.userId = userId;
    return true;
};
const result = addTodoToUser(1, 42);
console.log(result);
console.log(todos);
