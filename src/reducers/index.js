import {combineReducers} from "redux"
import devReducer from './devReducer'
import userReducer from "./userReducer";

export default combineReducers({
    dev:devReducer,
    user:userReducer
})