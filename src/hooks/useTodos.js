import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

let initialState;

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    const addNewTask = (newTodo) => {
        dispatch({
         type: "addTodo",
         payload: newTodo 
       })
     };
   
    const deleteTask = (id) => {
       dispatch({
         type: "deleteTodo",
         payload: id
       })
    };
   
    const toggleStatusTask = (id) => {
       dispatch({
         type: "toggleTodo",
         payload: id
       })
     };

    return ({
        todos,
        addNewTask,
        deleteTask,
        toggleStatusTask,
        getTodosCounter: todos.length,
        getPeddingTodosCounter: todos.filter(todo => !todo.done).length
    })
}
