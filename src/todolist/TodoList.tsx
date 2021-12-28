import React from "react";
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
};

function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
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
