import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../store/slices/todoSlice"; // aggiorna il path se serve
import { Link, useSearchParams } from "react-router";

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  // Fetch una volta sola e salva i todo nel Redux store
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => dispatch(setTodos(data)))
      .catch(console.error);
  }, [dispatch]);

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = useCallback((e) => {
    const newSearchTerm = e.target.value;
    setSearchParams({ search: newSearchTerm });
  }, [setSearchParams]);

  if (!todos.length) {
    return <p>Loading...</p>;
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
