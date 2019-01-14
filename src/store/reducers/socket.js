import { _socket } from "../constants";

const INITIAL_STATE = {
    socket: {},
    socketEvent: {},
    connecting: false,
    connected: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case _socket.ON_INITIALIZATION:
            return {
                ...state,
                connecting: true,
                connected: false,
                socket: action.payload.socket
            };
        case _socket.ON_OPEN:
            return {
                ...state,
                connecting: false,
                connected: true,
                socket: {},
                socketEvent: action.payload.event
            };
        case _socket.ON_CLOSE:
            return {
                ...state,
                connected: false,
                connecting: true,
                socket: {},
                socketEvent: action.payload.event
            };
        case _socket.ON_ERROR:
            return {
                ...state,
                connected: false,
                connecting: true,
                socket: {},
                socketEvent: action.payload.event
            };
        default:
            return { ...state };
    }
};
