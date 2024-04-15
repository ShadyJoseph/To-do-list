
import  { FC } from 'react';
import Header from './components/header/Header';
import TodoList from './components/list/TodoList';
import { TaskProvider } from './context';
import './App.css';

const App: FC = () => {
  return (
    <TaskProvider>
      <div className='App'>
        <Header />
        <TodoList />
      </div>
    </TaskProvider>
  );
}

export default App;
