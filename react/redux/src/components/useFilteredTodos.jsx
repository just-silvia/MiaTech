import { useState, useEffect } from 'react';

function useFilteredTodos(todos, searchTerm) {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTodos(todos);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFilteredTodos = todos.filter(todo =>
      todo.title.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredTodos(newFilteredTodos);
  }, [todos, searchTerm]);

  return filteredTodos;
}

export default useFilteredTodos;