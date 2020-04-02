import {combineReducers} from "redux"
import devReducer from './devReducer'

export default combineReducers({
    dev:devReducer
})