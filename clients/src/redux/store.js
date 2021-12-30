import { applyMiddleware, combineReducers, createStore } from "redux"
import {} from "react-redux"
import thunk, {} from "redux-thunk";
import {  userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const getUser = localStorage.getItem("user") ?localStorage.getItem("user") :  "";
const reducers = combineReducers({user:userReducer});
let login=false
if(getUser!= "" )
{
    login=true;
}
// console.log(getUser);
const intialState={
    user:{token: getUser, login}
}
const Store = createStore(reducers, intialState, composeWithDevTools(applyMiddleware(thunk)))
export default Store;





