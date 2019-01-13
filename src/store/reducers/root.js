import { combineReducers } from "redux";
import { default as stocks } from "./stocks";
import { default as socket } from "./socket";

export default combineReducers({
    stocks,
    socket
})