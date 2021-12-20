import React from "react";
import { getAllJSDocTagsOfKind } from "typescript";

type TaskType = {
  id: number;
  name: string;
  isDone: boolean;
};

type PropsType = {
  title: String;
  task: Array<TaskType>;
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
        <li>
          <input type="checkbox" checked={props.task[0].isDone} />{" "}
          <span>{props.task[0].name}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.task[1].isDone} />{" "}
          <span>{props.task[1].name}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.task[2].isDone} />{" "}
          <span>{props.task[2].name}</span>
        </li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
