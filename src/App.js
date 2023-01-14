import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (todo) =>{
    console.log("i am ondelete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo = (title,desc)=>
  {
    console.log('hello',title,desc)
    let sno;
    if(todos.length===0)
    {
      sno = 0;
    }
    else
    {
    sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  } 
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>

  <Header searchbar = {false} />
  <AddTodo addTodo={addTodo}/>
  <Todos  todos = {todos} onDelete={onDelete}/>
    
    <div style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`,
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       
    }}></div>
  <Footer/>
    </>
  );
}

export default App;
