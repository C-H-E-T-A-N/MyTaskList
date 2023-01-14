import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
  let bodystyle={
    color:"white",
    backgroundColor: "DodgerBlue",
    borderStyle: "outset",
    borderWidth:"3px",
    borderColor:"DodgerBlue",
  }
  return (
    <>
   <div className='container'>

   <h3 style={bodystyle} className='text-center my-3'>
    Task List:
   </h3>
   
   {props.todos.length===0? "No tasks added yet!":
   props.todos.map((todo)=>{
    return (<TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>)
   })
   }
   </div>
   
    </>
  )
}

export default Todos
