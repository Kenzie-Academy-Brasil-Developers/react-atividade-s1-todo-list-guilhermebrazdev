import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodo(remove) {
    const remover = todos.filter((arroz, index) => {
      return index !== remove;
    });
    setTodos(remover);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form adicionar={addTodo} />
        <TodoList item={todos} remov={handleTodo} />
      </header>
    </div>
  );
}

export default App;
