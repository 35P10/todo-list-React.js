import { useForm } from '../hooks/useForm'

export const FormAddTask = ( {actionFunction}) => {
  
  const {newTaskDescripcion, onInputChange, onResetForm} = useForm({
    newTaskDescripcion: "",
  })

  const onFormSubmit = (e) => {
    e.preventDefault();
    if( newTaskDescripcion.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: newTaskDescripcion,
    }

    actionFunction && actionFunction(newTodo);
    onResetForm();
  };
  
  return (
    <>
      <form action="">
        <input 
          type="text" 
          placeholder="¿Que hay que hacer?" 
          name="newTaskDescripcion"
          value={newTaskDescripcion}
          onChange={onInputChange}
        />
        <button type="submit" onClick={onFormSubmit}>Añadir</button>
      </form>
    </>
  )
}
