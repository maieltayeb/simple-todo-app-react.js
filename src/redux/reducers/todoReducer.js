//import { GET_All_Todos,Add_Todo,Delete_Todo,Update_Todo_isDone} from "./actionTypes";
import {createSlice} from "@reduxjs/toolkit";
let State=[];
const todoSlice=createSlice({
    name:"todo",
    initialState:State,
    reducers:{
        GET_All_Todos:(state,action)=>{
            state=action.payload    
          return  state
        },
        Add_Todo:(state,action)=>{
            console.log("action",action);
            state.push(action.payload)
        },  
        Delete_Todo:(state,action)=>{
            let deletedTodoIndex= state.findIndex((todo)=>todo.id===action.payload);
                state.splice(deletedTodoIndex,1)
        },
        Update_Todo_isDone:(state,action)=>{
                let updatedTodoIndex= state.findIndex((todo)=>todo.id===action.payload);
                state[updatedTodoIndex].isDone=!state[updatedTodoIndex].isDone;
        }
    }
})

export const {GET_All_Todos, Add_Todo, Delete_Todo,Update_Todo_isDone}=todoSlice.actions;
export default todoSlice.reducer;
//  const todoReducer=(state=intialState,action)=>{
//     let newState;
//      switch (action.type) {
//          case GET_All_Todos:
//          newState=[...state];
//          newState=action.payload;

//              break;
//      case Add_Todo:
//          newState=[...state,action.payload]
//          break;
//          case Delete_Todo:
//              newState=[...state];
//              let deletedTodoIndex= newState.findIndex((todo)=>todo.id===action.payload);
//              newState.splice(deletedTodoIndex,1)
//              break;

//              case Update_Todo_isDone:
//                 newState=[...state];
//                 let updatedTodoIndex= newState.findIndex((todo)=>todo.id===action.payload);
//                 newState[updatedTodoIndex].isDone=!newState[updatedTodoIndex].isDone;
                 
//                  break;
//          default:
//              newState=state;
//              break;
//      }
// return newState;
// }
// export default todoReducer;