import RootReducer from "./Reducers/RootReducer";
import { createStore, applyMiddleware, compose } from "redux";

// import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const store = createStore(
//   RootReducer,
//   devToolsEnhancer(),
//   applyMiddleware(thunk)
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const LoggerMidleWare = (store) => (next) => (actions) => {
//   let result;
//   console.groupCollapsed("dispatching", actions.type);
//   console.log("prev State", store.getState());
//   console.log("actions", actions);
//   result = next(actions);
//   console.log("next State", store.getState());
//   console.groupEnd();
//   return result;
// };

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
