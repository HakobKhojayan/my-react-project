import { combineReducers } from "redux";
import { aboutRecuder } from "./about/reducer";


const rootReducer = combineReducers({
    text: aboutRecuder,
    likes: aboutRecuder
})

export default rootReducer