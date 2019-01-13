import { _socket } from "../constants";

export const updateSocketEvent = (type, event) => {
    return {
        type,
        payload: { event }
    };
};

export const socketInitialized = socket => {
    return {
        type: _socket.ON_INITIALIZATION,
        payload: { socket }
    };
};