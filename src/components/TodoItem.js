import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div className='container' style={{
      color:"white",
      backgroundColor: "DodgerBlue",
    borderStyle: "outset",
    borderColor:"DodgerBlue",
    borderWidth:"5px",
    margin:"0px 0px 20px 0px",
    padding:" 10px 10px 0px 10px"
    }}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button style={{
        borderStyle:"outset",
    borderWidth:"3px",
      }} className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Remove Task</button><hr/>
    </div>
  )
}

export default TodoItem
