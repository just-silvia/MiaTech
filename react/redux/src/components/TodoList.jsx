import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos, deleteTodo, toggleTodo } from "../store/slices/todoSlice";
import { useSearchParams } from "react-router";

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

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
    setSearchParams({ search: e.target.value });
  }, [setSearchParams]);

  const handleClick = (todo) => {
    if (todo.completed) {
      dispatch(deleteTodo(todo.id));
    } else {
      dispatch(toggleTodo(todo.id));
    }
  };

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
          <li
            key={todo.id}
            onClick={() => handleClick(todo)}
            title={todo.completed ? "Clicca per eliminare" : "Clicca per completare"}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;