import React from "react";
import './todoList.css';
import TodoItem from "../todoItem/todoItem";
const TodoList=(props)=>{
    
    const {todoList,deleteTodo,onDoneTodo}=props;
  
    
return(
<>
{todoList.map((todo)=>
 <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} onDoneTodo={onDoneTodo}></TodoItem>
)}


</>

)



}
export default TodoList;