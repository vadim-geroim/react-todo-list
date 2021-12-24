import React, { useState } from "react";
import "./App.css";
import TodoList from "./todolist/TodoList";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      name: "HTML&CSS",
      isDone: true,
    },
    {
      id: 2,
      name: "JS",
      isDone: true,
    },
    {
      id: 3,
      name: "React",
      isDone: false,
    },
    {
      id: 4,
      name: "REST API",
      isDone: false,
    },
    {
      id: 5,
      name: "GraphQL",
      isDone: false,
    },
  ]);

  function removeTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <TodoList title="What to Learn" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
