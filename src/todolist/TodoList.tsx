import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  ChangeEventHandler,
} from "react";
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
  changeTaskStatus: (taskId: string, taskStatus: boolean) => void;
  filter: FilterValuesType;
};

function TodoList(props: PropsType) {
  let [newTaskTitle, setNewTitle] = useState("");

  const addNewTaskHandler = () => {
    if (newTaskTitle.trim() === "") {
      return;
    }

    props.addTask(newTaskTitle);
    setNewTitle("");
  };

  const onAllFilterHandler = () => {
    props.changeFilter("all");
  };

  const onActiveFilterHandler = () => {
    props.changeFilter("active");
  };

  const onCompletedFilterHandler = () => {
    props.changeFilter("completed");
  };

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      addNewTaskHandler();
    }
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onInputChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addNewTaskHandler}>+</button>
      </div>
      <ul>
        {props.tasks.map((task) => {
          const onDeleteHandler = () => props.removeTask(task.id);
          const taskStatusHandler = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, e.currentTarget.checked);

          return (
            <li key={task.id} className={task.isDone ? "is-done" : ""}>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={taskStatusHandler}
              />{" "}
              <span>{task.name}</span>&nbsp;
              <button onClick={onDeleteHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          className={props.filter === "all" ? "filter-active" : ""}
          onClick={onAllFilterHandler}
        >
          All
        </button>
        <button
          className={props.filter == "active" ? "filter-active" : ""}
          onClick={onActiveFilterHandler}
        >
          Active
        </button>
        <button
          className={props.filter === "completed" ? "filter-active" : ""}
          onClick={onCompletedFilterHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
