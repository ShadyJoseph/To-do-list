// Header.tsx
import React, { FC, useState, ChangeEvent, PropsWithChildren } from "react";
import { useTask } from "../../context";
import "./Header.css";

const Header: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const { addTask } = useTask();

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setDeadline(value);
    }
  };

  const handleAddTask = () => {
    if (task.trim() !== "" && deadline !== undefined) {
      addTask({ task, deadline });
      setTask("");
      setDeadline(0);
    } else {
      alert("Please enter a task and deadline.");
    }
  };

  return (
    <div className="header-container">
      <input
        type="text"
        placeholder="Task..."
        value={task}
        onChange={handleTaskChange}
      />
      <input
        type="number"
        placeholder="Deadline..."
        value={deadline === undefined ? "" : deadline}
        onChange={handleDeadlineChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Header;
