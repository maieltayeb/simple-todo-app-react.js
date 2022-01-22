import React from 'react';
import './todoApp.css';
import AddtodoForm from '../components/addTodoForm/addTodoForm';
import TodoList from '../components/todoList/todoList';


const TodoAppPage=(props)=> {


  return( <div className="container">
  <h1>ToDo list</h1>
 <AddtodoForm></AddtodoForm> 
 <TodoList></TodoList>
 </div>)
}

export default TodoAppPage;
