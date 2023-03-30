import { TodoItem } from './TodoItem'

export const TodoList = ({list = [], toggleFunction, deleteFunction}) => {
  return (
    <ul>
    {
        list.map(todo => 
            <TodoItem item={todo} deleteFunction={deleteFunction} toggleFunction={toggleFunction}/>
        )
    }    
    </ul>
  )
}
