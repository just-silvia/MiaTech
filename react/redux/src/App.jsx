import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>La mia ToDo List con Redux</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;