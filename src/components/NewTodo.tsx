import React,{useRef} from 'react'

type TodoObject  = {
onAddTodo: (todoText:string) => void
}
 
const NewTodo:React.FC<TodoObject> = props => {
const textinputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler =  (event:React.FormEvent) =>{
        event.preventDefault()

        const enteredText = textinputRef.current!.value
        if(enteredText === ""){
            alert('please type something')
        }else{
            props.onAddTodo(enteredText)
        }
       

    }
  return (
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor='todo-text'>Todo Text</label>
            <input type='text' id='todo-text' ref={textinputRef}/>
        </div>
        <button type='submit'>Add todo</button>
    </form>
  )
}


export default NewTodo