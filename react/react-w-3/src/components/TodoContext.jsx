import React, { createContext, useState, useEffect } from 'react';
import useFetch from './UseFetch';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};