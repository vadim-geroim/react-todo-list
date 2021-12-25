import { type } from "os";
import React, { useState } from "react";
import "./App.css";
import TodoList from "./todolist/TodoList";

export type FilterValuesType = "all" | "active" | "completed";

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

  let [filter, setFilter] = useState<FilterValuesType>("all");
  let tasksForTodoList = tasks;

  if (filter === "active") {
    tasksForTodoList = tasks.filter((task) => task.isDone === false);
  } else if (filter === "completed") {
    tasksForTodoList = tasks.filter((task) => task.isDone === true);
  }

  function changeFilter(filter: FilterValuesType) {
    setFilter(filter);
  }

  return (
    <div className="App">
      <TodoList
        title="What to Learn"
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
