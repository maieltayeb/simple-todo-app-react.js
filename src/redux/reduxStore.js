 //import {  compose,applyMiddleware } from 'redux';
 //import thunk from 'redux-thunk';
//import rootReducer from './reducers/rootReducer';
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./reducers/todoReducer"



 const store = configureStore({ 
     reducer:{todo:todoReducer} ,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),

})
 export default store;
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export default process.env.NODE_ENV==="development" ? configureStore ()): configureStore({});


//export default process.env.NODE_ENV==="development" ? configureStore (rootReducer,composeEnhancers( applyMiddleware(thunk))): configureStore(rootReducer, applyMiddleware(thunk));

