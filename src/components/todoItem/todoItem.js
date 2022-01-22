import React from "react";
import './todoItem.css';
import {connect ,useDispatch } from "react-redux";
import {DeleteTodo,updateTodo} from '../../redux/actions/todosActions';

const TodoItem=(props)=>{
let {todo}=props;
const dispatch=useDispatch();

const deleteTodoHandler=(item)=>{

dispatch(DeleteTodo(item.id))
 
}


const onDoneHandler=(todo)=>{
 
  let id=todo.id;
 const TodoUpdated = {
  text:todo.text,
  isDone:!todo.isDone,
  date:todo.date
}
dispatch(updateTodo(TodoUpdated,id))
}

let icon=todo.isDone ? "fa fa-check icon":"fa fa-history icon";
let delClass=todo.isDone ?"del":"";
return(


<div className="input-container">
  

       <i  onClick={()=>onDoneHandler(todo)}  className={icon} aria-hidden="true"></i> 
      <input className={`input-field ${delClass}`} type="text"  name={todo.text} value={todo.text} readOnly/>
      <span>{todo.date}</span>
       <i className="fa fa-trash icon icon-delete" aria-hidden="true" onClick={()=>deleteTodoHandler(todo)}></i>
  
  </div>
  
)



}


const mapStateTOprops=(state)=>{
  return({
    state:state.todosArray
  })
}


export default connect(mapStateTOprops)(TodoItem);