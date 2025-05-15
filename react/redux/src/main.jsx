import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { TodoProvider } from './components/TodoContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TodoProvider>                   
      <App />
    </TodoProvider>
  </BrowserRouter>
);