"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [
    { id: 1, title: "creare interfaccia todo", completed: true, userId: 42 },
    { id: 2, title: "creare interfaccia user", completed: true, userId: 7 },
    { id: 3, title: "finalizzare il progetto", completed: false, userId: 43 }
];
//ESERCIZIO FUNZIONE addTodo
let newId = 1;
const addTodo = (obj) => {
    const newTodo = {
        id: newId++,
        title: obj.title,
        completed: false
    };
    todos.push(newTodo);
    /* console.log(newTodo); */
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
/* console.log(result);
console.log(todos); */
//ESERCIZIO FUNZIONE getUserTodos
const getUserTodos = (userId) => {
    return todos.filter(todo => todo.userId == userId);
};
console.log(getUserTodos(43));
