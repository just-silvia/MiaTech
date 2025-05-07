import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from "react";
import useFilteredTodos from "./useFilteredTodos";
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const { todos, loading, error } = useContext(TodoContext); 
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const filteredTodos = useMemo(() => {
        return useFilteredTodos(todos || [], searchTerm);
    }, [todos, searchTerm]);

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
                ref={inputRef}
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