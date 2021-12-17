import React, { useEffect,useState  } from 'react';
import './todoApp.css';
import AddtodoForm from '../components/addTodoForm/addTodoForm';
import TodoList from '../components/todoList/todoList';

import axios from 'axios';
const TodoAppPage=(props)=> {

  const [state,setState]=useState([])
  


  const addTodoHandler=(todo)=>{
 const newTodos=[...state,todo];
 setState(newTodos)
  }

  const deleteTodo=(id)=>{
 const newTods=[...state];
let deletedTodoIndex= newTods.findIndex((todo)=>todo.id===id);
newTods.splice(deletedTodoIndex,1)
setState(newTods)

  }
const onDoneTodo=(id)=>{
  const newTods=[...state];
  let deletedTodoIndex= newTods.findIndex((todo)=>todo.id===id);
  newTods[deletedTodoIndex].isDone=!newTods[deletedTodoIndex].isDone;
  setState(newTods)
}

  useEffect(()=>{
    axios.get('https://todo-app-bf986-default-rtdb.firebaseio.com/todos.json')
       .then((res)=>{
        
         const todos=res.data;
        
         const newTodos=[];
       for (const key in todos) {
         
          newTodos.push({id:key,...todos[key]})
         }
         setState(newTodos)
  
       })
       .catch(err=>{
         console.log(err);
       })
  
  },[])
  return (
    
    <div className="container">
      <h1>ToDo list</h1>
     <AddtodoForm addTodoHandler={addTodoHandler} ></AddtodoForm> 
     <TodoList todoList={state}  deleteTodo={deleteTodo} onDoneTodo={onDoneTodo}></TodoList>
     
     </div>
    
  );
}

export default TodoAppPage;
