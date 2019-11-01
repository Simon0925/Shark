import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";

import reducer from "./reducers";
import history from "./history";

const logger = createLogger({ collapsed: true });

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history), logger));

const store = createStore(reducer, enhancer);

export default store;
