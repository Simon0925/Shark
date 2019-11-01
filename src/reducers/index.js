import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../history";
import info from "./info";

export default combineReducers({
  router: connectRouter(history),
  info
});
