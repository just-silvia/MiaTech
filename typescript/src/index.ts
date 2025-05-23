import { Todo, TodoWithMetadata } from "./types";

const todos: Todo[] = [
    { id: 1, title: "creare interfaccia todo", completed: true, userId: 42 },
    { id: 2, title: "creare interfaccia user", completed: true, userId: 7 },
    { id: 3, title: "finalizzare il progetto", completed: false, userId: 43 }
];

//ESERCIZIO FUNZIONE addTodo

/* let newId = 1;

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

addTodo({ title: "lista di todo" }); */

//ESERCIZIO FUNZIONE addTodoToUser

const addTodoToUser = (todoId: number, userId: number) => {
    const todo = todos.find(todo => todo.id == todoId);
    if(!todo) return false;
    todo.userId = userId;
    return true;
}

const result = addTodoToUser(1, 42);
/* console.log(result);
console.log(todos); */

//ESERCIZIO FUNZIONE getUserTodos

const getUserTodos = (userId: number) => {
    return todos.filter(todo => todo.userId == userId);
}

/* console.log(getUserTodos(7)) */;

//ESERCIZIO ERRORI CON NEVER

const error = (message:string): never => {
    throw new Error(message);
}

//ESERCIZIO TIPI DINAMICI CON UNKNOWN

const parseInput = (input: unknown) => {
    if(typeof input === "string") {
        return input;
    } else if (typeof input === "number") {
        return input.toString();
    } else {
        return error("input errato");
    }
}

/* console.log(parseInput("ciao"));   
console.log(parseInput(123));      
console.log(parseInput(true)); */

//ESERCIZIO TYPE ANY

/* let newId = 1;

const addTodo = (obj: { title: string, metadata?: any }): Todo => {
    const newTodo: Todo = {
        id: newId++,
        title: obj.title,
        completed: false,
        metadata: obj.metadata,
    };

    todos.push(newTodo);
    console.log(newTodo);

    return newTodo;
}

addTodo({ title: "Ciao ciao", metadata: "metadata" });
addTodo({ title: "Ciao" }); */

//ESERCIZIO UNION

let newId = 1;

const addTodo = (obj: { title: string, metadata?: string | object }): TodoWithMetadata => {
    const newTodo: TodoWithMetadata = {
        id: newId++,
        title: obj.title,
        completed: false,
        metadata: obj.metadata,
    };

    todos.push(newTodo);
    console.log(newTodo);

    return newTodo;
}

addTodo({ title: "Ciao ciao", metadata: "silvia" });
addTodo({ title: "Ciao" });

//ESERCIZIO UTILITY PARTIAL

const updateTodo = (id: number, updates: Partial<Todo>): Todo | null => {
    const todo = todos.find(todos => todos.id == id);
    if(!todo) return null;
    Object.assign(todo, updates);
    return todo;
}

console.log(updateTodo(2, { title: "fare la spesa" }));
console.log(updateTodo(99, { title: "andare al mare" }));

//ESERCIZIO TUPLA

const getTodoSummary = (todos : Todo) : [title: string, completed: boolean] => {
    return [todos.title, todos.completed];
}

const myTodo = {
    id: 1,
    title: "mia todo",
    completed: true
}

const summary = getTodoSummary(myTodo);
console.log(summary);