import React from 'react'

export const TodoItem = ({item, deleteFunction, toggleFunction}) => {
  const {id,description} = item;
  return (
    <li>
      <span
        onClick={ () => toggleFunction(id)}
      >{description}</span>
      <button onClick={ () => deleteFunction(id)}>Borrar</button>
    </li>
  )
}
