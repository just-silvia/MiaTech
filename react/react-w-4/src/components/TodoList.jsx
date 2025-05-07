import React, { useCallback } from "react";
import useFetch from "./UseFetch";
import useFilteredTodos from "./useFilteredTodos";
import { Link, useSearchParams } from "react-router-dom";

const TodoList = () => {
    const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get('search') || '';
    const filteredTodos = useFilteredTodos(todos || [], searchTerm);

    const handleSearchChange = useCallback((e) => {
        const newSearchTerm = e.target.value;
        setSearchParams({ search: newSearchTerm });
    }, [setSearchParams]);

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
                        <Link to={`/todos/${todo.id}`}>
                            {todo.title} {todo.completed ? "(Completato)" : "(Da completare)"}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;