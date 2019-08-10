import { applyMiddleware, createStore } from 'redux'

import loggerMiddleware from "./middlewares/Logger"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers";

export default () => {

    if (process.env.NODE_ENV === 'development') {
        const middlewareEnhancer = applyMiddleware(loggerMiddleware);
        const composedEnhancers = composeWithDevTools(middlewareEnhancer);

        return createStore(rootReducer, {}, composedEnhancers);
    }

    return createStore(rootReducer);
}