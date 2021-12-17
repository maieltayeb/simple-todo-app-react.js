import React, { useState } from "react";
import './addTodoForm.css';
import axios from "axios";
const AddtodoForm=(props)=>{

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
          axios.post('https://todo-app-bf986-default-rtdb.firebaseio.com/todos.json',newTodo)
          .then((res)=>{
         
            const id=res.data.name;
         if(res.status===200){
             props.addTodoHandler({...newTodo,id})
         }

          })
          .catch((err)=>{
              console.log(err);
          })
         
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
export default AddtodoForm;