import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cnnot be empty!");
        }
        else
        {
            addTodo(title, desc);
            setTitle("");
            setDesc(""); 

        }
        

    }
  return (
    <>

    
    <form className='container py-3'  onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Task Name</label>
      {/* <input type="text" style={{ */}
        {/* //  width:"50" */}
      {/* // }} value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/> */}
      <div><textarea  value={title} onChange={(e)=>{setTitle(e.target.value)}} rows="1" cols="40"></textarea></div>
    
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Description</label>
      {/* <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} style={{ */}
        {/* height:"100px", */}
        
      {/* }} maxLength="10"  size="10" className="form-control" id="desc"/> */}
      <div><textarea  value={desc} onChange={(e)=>{setDesc(e.target.value)}} rows="10" cols="40"></textarea></div>
    </div>
    
    <button type="submit" style={{
    backgroundColor: "DodgerBlue",
    borderStyle: "outset",
    borderWidth:"3px",
    borderColor:"DodgerBlue",
    }} className="btn btn-sm btn-primary">Add Task</button>
  </form>
    </>
  )
}

export default AddTodo
