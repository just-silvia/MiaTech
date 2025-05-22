"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [];
var newId = 1;
var addTodo = function (obj) {
    var newTodo = {
        id: newId++,
        title: obj.title,
        completed: false
    };
    todos.push(newTodo);
    console.log(newTodo);
    return newTodo;
};
addTodo({ title: "lista di todo" });
