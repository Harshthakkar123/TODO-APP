import './App.css';
import './index';
import fire from './Fire';
import login from './Login'
import {Todos} from './MyComponents/Todos';

import {Footer} from './MyComponents/Footer'
import Signup from './Signup';

import Header from "./MyComponents/Header";
import {About} from "./MyComponents/About";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import { cleanup } from '@testing-library/react';
//import { Router } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





function App() {
  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("delete",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }
  const addTodo=(title,desc)=>
  {
    
    console.log("i AM ADDING TODO",title,desc);
    let sno;
    if(todos.length===0)
    {
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;

    }
    const mytodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo);     
  
  }
  
  const [todos,setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    
  },[todos])



  
  


  return (
    <>
    <Router>
      <Header title ="My todos list"/>


      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/Signup">
          <Signup/>
          </Route>
         
          
        </Switch> 
      <Footer/>
      </Router>

    </>

  );
}






export default App;
