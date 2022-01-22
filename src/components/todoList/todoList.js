import React from "react";
import { connect } from "react-redux";
import './todoList.css';
import TodoItem from "../todoItem/todoItem";
const TodoList=(props)=>{
  console.log("props from todo list",props);
const {todoList}=props; 
return(
<>
{todoList.map((todo)=>
 <TodoItem key={todo.id} todo={todo} ></TodoItem>
)}


</>

)



}
const mapStateToProps = reduxState => {
    return {
    todoList:reduxState.todo
     
    };
  };
export default connect(mapStateToProps)(TodoList);