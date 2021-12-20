import React from "react";
import "./App.css";
import TodoList from "./todolist/TodoList";

let task1 = [
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
];

let task2 = [
  {
    id: 4,
    name: "All about You",
    isDone: true,
  },
  {
    id: 5,
    name: "First",
    isDone: true,
  },
  {
    id: 6,
    name: "What a Day!",
    isDone: false,
  },
];

function App() {
  return (
    <div className="App">
      <TodoList title="What to Learn" task={task1} />
      <TodoList title="Songs" task={task2} />
    </div>
  );
}

export default App;
