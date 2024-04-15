// TaskProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  PropsWithChildren,
} from "react";

interface Task {
  task: string;
  deadline: number;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
});

export const TaskProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextType => useContext(TaskContext);
