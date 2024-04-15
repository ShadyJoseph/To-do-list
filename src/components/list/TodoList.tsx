import React, { useState } from "react";
import { useTask } from "../../context";
import "./TodoList.css";

const TodoList: React.FC = () => {
  const { tasks } = useTask();
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [removedTasks, setRemovedTasks] = useState<number[]>([]);

  const toggleTaskCompletion = (index: number) => {
    setCompletedTasks((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  const removeTask = (index: number) => {
    setRemovedTasks((prevState) => [...prevState, index]);
  };

  const isTaskCompleted = (index: number) => completedTasks.includes(index);
  const isTaskRemoved = (index: number) => removedTasks.includes(index);

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {tasks.map(
          (task, index) =>
            !isTaskRemoved(index) && (
              <li
                key={index}
                className={isTaskCompleted(index) ? "completed" : ""}
              >
                <span
                  className="checkmark"
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {isTaskCompleted(index) ? "✔" : ""}
                </span>
                {task.task} - Deadline: {task.deadline}
                <button onClick={() => toggleTaskCompletion(index)}>
                  Complete
                </button>
                <button onClick={() => removeTask(index)}>Remove</button>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
