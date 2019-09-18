import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./rootReducer";

export default function configureStore(initialState) {
  const logger = createLogger({ collapsed: true }); // log every action to see what's happening behind the scenes.

  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
}
