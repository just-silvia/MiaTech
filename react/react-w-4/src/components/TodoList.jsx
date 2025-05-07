import React, { useState, useCallback } from "react";
import useFetch from "./UseFetch";
import useFilteredTodos from "./useFilteredTodos";

const TodoList = () => {
    const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredTodos = useFilteredTodos(todos || [], searchTerm);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore... {error}</p>;
    }

    return (
        <div>
            <h2>To-Do</h2>
            <input
                type="text"
                placeholder="Cerca to-do..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} {todo.completed ? '(Completato)' : '(Da completare)'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;