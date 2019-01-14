import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from "./reducers";

const loggerMiddleware = createLogger()

export default preloadedState => {
    const middlewares = [thunkMiddleware];
    // if (process.env.REACT_APP_ENV !== "production") {
    //     middlewares.push(loggerMiddleware);
    // }
    
    return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
};
