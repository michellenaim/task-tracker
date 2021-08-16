import React from "react";
import { ITask } from "../App";

interface TodoTaskProps {
  task: ITask;
}

const TodoTask = ({ task }: TodoTaskProps) => {
  return (
    <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button>X</button>
    </div>
  );
};

export default TodoTask;
