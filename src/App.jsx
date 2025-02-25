



import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import Todoitems from "./Components/Todoitems";
import "./App.css";
import { useState } from "react";
import initialTodoItems from "./Data/InitialTodoItems";

function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems(currentItems => [
      ...currentItems,
      { id: todoText, todoText: todoText, todoDate: todoDate },
    ]);
  };

  const deleteTodoItems = (todoId) => {
    setTodoItems(currentItems => currentItems.filter(item => item.id !== todoId));
    console.log("Deleted:", todoId);
  };

  return (
    <div className="container">
      <center>
        <AppName />
        <AddTodo addTodoItem={addTodoItem} />
        <Todoitems todoItems={todoItems} deleteTodoItems={deleteTodoItems} />
      </center>
    </div>
  );
}

export default App;

