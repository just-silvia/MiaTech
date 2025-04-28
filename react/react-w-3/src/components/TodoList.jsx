import React from "react";
import useFetch from "./UseFetch";

const TodoList = () => {
    const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore... {error}</p>;
    }

    return (
        <div>
            <h2>To-Do</h2>
            {todos && (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title} {todo.completed ? '(Completato)' : '(Da completare)'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoList;