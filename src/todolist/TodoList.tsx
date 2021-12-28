import React, { useState } from "react";
import { getAllJSDocTagsOfKind } from "typescript";
import { FilterValuesType } from "../App";

type TaskType = {
  id: string;
  name: string;
  isDone: boolean;
};

type PropsType = {
  title: String;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (filter: FilterValuesType) => void;
  addTask: (title: string) => void;
};

function TodoList(props: PropsType) {
  let [newTaskTitle, setNewTitle] = useState("");

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={(e) => setNewTitle(e.currentTarget.value)}
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              props.addTask(newTaskTitle);
              setNewTitle("");
            }
          }}
        />
        <button
          onClick={() => {
            props.addTask(newTaskTitle);
            setNewTitle("");
          }}
        >
          +
        </button>
      </div>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />{" "}
            <span>{task.name}</span>&nbsp;
            <button onClick={() => props.removeTask(task.id)}>x</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button onClick={() => props.changeFilter("active")}>Active</button>
        <button onClick={() => props.changeFilter("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
