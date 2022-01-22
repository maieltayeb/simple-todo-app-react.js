import axios from "axios";

import {GET_All_Todos, Delete_Todo, Add_Todo,Update_Todo_isDone} from"../reducers/todoReducer";

export const getAllTodos=function(){
    return function(dispatch){
        return (
        axios.get('https://todo-app-bf986-default-rtdb.firebaseio.com/todos.json')

        .then((res)=>{
            
          const todos=res.data;
          console.log(todos);
          const newTodos=[];
        for (const key in todos) {
          
           newTodos.push({id:key,...todos[key]})
          }
         dispatch(getAllTodosSucsess(newTodos))
    
        })
        .catch(err=>{
          console.log(err);
        })
    
        )
    
    }
}



export const getAllTodosSucsess=todos=>{
    console.log("from get all sucsses",todos);
    return GET_All_Todos(todos)
}
/************************************************************************ */
export const addTodo=function(newTodo){
    return function(dispatch){
        return(
            axios.post('https://todo-app-bf986-default-rtdb.firebaseio.com/todos.json',newTodo)
            .then((res)=>{
           
              const id=res.data.name;
           if(res.status===200){
            dispatch(addTodoSuccess({...newTodo,id}))
             
           }
  
            })
            .catch((err)=>{
                console.log(err);
            })
           
        )
    }
}


export const addTodoSuccess=todo=>{
    return    Add_Todo(todo)
}


/****************************************************** */
export const DeleteTodo=function(id){
    return function(dispatch){
        return (
            axios.delete(`https://todo-app-bf986-default-rtdb.firebaseio.com/todos/${id}.json`)
            .then((res)=>{
              if(res.status === 200) 
              
              dispatch( Delete_Todo(id))
            })
            .catch((err)=>console.log(err))
        )
    }
}

// export const DeleteTodoSuccess=id=>{
//     return    Delete_Todo(id)
// }

/******************************************************************** */

export const updateTodo=function(TodoUpdated,id){
    return function(dispatch){

    return(

        axios.patch(`https://todo-app-bf986-default-rtdb.firebaseio.com/todos/${id}.json`,TodoUpdated)
        .then((res)=>{
          if(res.status === 200) 
          dispatch(Update_Todo_isDone(id));
        })
    )
    }
}
// export const updateTodoSuccess=id=>{
//     return Update_Todo_isDone(id)
// }