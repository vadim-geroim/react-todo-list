import { type } from "os";
import React, { useState } from "react";
import "./App.css";
import TodoList from "./todolist/TodoList";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: v1(),
      name: "HTML&CSS",
      isDone: true,
    },
    {
      id: v1(),
      name: "JS",
      isDone: true,
    },
    {
      id: v1(),
      name: "React",
      isDone: false,
    },
    {
      id: v1(),
      name: "REST API",
      isDone: false,
    },
    {
      id: v1(),
      name: "GraphQL",
      isDone: false,
    },
  ]);

  function removeTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(newTitle: string) {
    const newTask = { id: v1(), name: newTitle, isDone: false };
    const newTasksList = [newTask, ...tasks];
    setTasks(newTasksList);
  }

  function changeTaskStatus(taskId: string, taskStatus: boolean) {
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = taskStatus;
    }

    setTasks([...tasks]);
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
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
