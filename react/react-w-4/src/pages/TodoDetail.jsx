import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => res.json())
            .then((data) => setTodo(data))
            .catch((err) => console.error("Errore nel fetch:", err));
    }, [id]);

    if (!todo) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div>
                <h2>Dettagli To-Do</h2>
                <p>ID: {todo.id}</p>
                <p>Title: {todo.title}</p>
                <p>Completato: {todo.completed ? "Sì" : "No"}</p>
            </div>
        </>
    );
}

export default TodoDetail;