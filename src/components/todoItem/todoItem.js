import React from "react";
import './todoItem.css';
import axios from "axios";
const TodoItem=(props)=>{

const {todo,deleteTodo,onDoneTodo}=props;

const deleteTodoHandler=(item)=>{
   let id=item.id;

axios.delete(`https://todo-app-bf986-default-rtdb.firebaseio.com/todos/${id}.json`)
  .then((res)=>{
    if(res.status === 200) deleteTodo(id);
  })
  .catch((err)=>console.log(err));
  

 
}


const onDoneHandler=(todo)=>{
  let id=todo.id;
 const updateTodo = {
  text:todo.text,
  isDone:!todo.isDone,
  date:todo.date
}

axios.patch(`https://todo-app-bf986-default-rtdb.firebaseio.com/todos/${id}.json`,updateTodo )
.then((res)=>{
  if(res.status === 200) onDoneTodo(id);
})
}
 
let icon=todo.isDone ? "fa fa-check icon":"fa fa-history icon";
let c=todo.isDone ?"del":"";
return(


<div className="input-container">
  

  <i  onClick={()=>onDoneHandler(todo)}  className={icon} aria-hidden="true"></i>
  
  {/* <i className="fa fa-history  icon" onClick={()=>onDoneHandler(todo)}  aria-hidden="true"></i>  */}

     <input className={`input-field ${c}`} type="text"  name={todo.text} value={todo.text} readOnly/>
     <span>{todo.date}</span>
     <i className="fa fa-trash icon icon-delete" aria-hidden="true" onClick={()=>deleteTodoHandler(todo)}></i>
 
  </div>
  
)



}
export default TodoItem;