import React from 'react';
import './App.css';
import { TodoList, FormAddTask } from './components';
import { useTodos } from './hooks/useTodos';

const App = () => {
  const {todos, addNewTask, deleteTask, toggleStatusTask, getTodosCounter, getPeddingTodosCounter} = useTodos();

  return (
    <>
      <h1>TODOAPP</h1>
      <p>TODOS: {getTodosCounter} Restantes: {getPeddingTodosCounter}</p>
      <TodoList list={todos} deleteFunction={deleteTask} toggleFunction={toggleStatusTask} />
      <div>
        <h3>Agregar TODO</h3>
        <FormAddTask actionFunction = {addNewTask}/>
      </div>
    </>
  );
}

export default App;
