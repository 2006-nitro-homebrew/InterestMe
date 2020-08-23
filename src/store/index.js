import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from './user'
import {loadState, saveState} from './storage'

const persistedState = loadState()

const reducer = combineReducers({user}); //make sure to put individual reducers here
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, persistedState, middleware);

store.subscribe(() => {
  saveState({
    user: store.getState().user,
  })
})

export default store;
// export * from "./user";
