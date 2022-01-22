import React, { useState } from "react";
import './addTodoForm.css';
import { connect, useDispatch } from 'react-redux';
import {addTodo} from '../../redux/actions/todosActions';
const AddtodoForm=(props)=>{
const dispatch=useDispatch();


    const todoValue="" ;
    const [todo,setTodo]=useState(todoValue);
   

 ////input change
const onChangeHandler=(e)=>{

 setTodo(e.target.value);
 

}

/*** when user  enter***************** */
const onkeyHandler=(e)=>{
const {key}=e;

    const newTodo = {
        text:todo,
        isDone: false,
        date: new Date().toLocaleDateString()
      }
      if(key==='Enter'){
          setTodo("")
         dispatch(addTodo(newTodo))
      }
}


return(
<>
<input  className="inputOne"  type="text" value={todo} placeholder="new todo..."
onChange={(e)=>onChangeHandler(e)} 
onKeyUp={(e)=>onkeyHandler(e)}
/>

</>

)



}
const mapStateToProps = reduxState => {
    return {
    todoList: reduxState.todosArray
     
    };
  };
export default connect(mapStateToProps)(AddtodoForm);