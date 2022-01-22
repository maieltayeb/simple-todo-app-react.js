

import React, { useEffect } from 'react';

import TodoAppPage from '../pages/todoApp';

import { useDispatch } from 'react-redux';

import {getAllTodos}from '../redux/actions/todosActions';

function App() {

const dispatch=useDispatch();

  useEffect(()=>{
  dispatch(getAllTodos())
  },[dispatch])
  
  return (
    
    <TodoAppPage/>
    
  );
}

// const mapDispatchToProps=(dispatch)=>{
// return({
//   sendStatetoRedux:state=>dispatch({type:GET,payload:state})
// })
// }

// const mapStateToProps=reduxState=>{
// return({
//   state:reduxState
// })
// }
export default App;
