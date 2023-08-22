import { combineReducers, compose, createStore } from 'redux';
// import thunkMiddleware, {ThunkAction} from "redux-thunk";  // своё название любое
import deskReducer from './deskReducer';

const rootReducer = combineReducers({
  desk: deskReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// let state: AppStateType;
// state.dialogsPage   Можем теперь достать часть стейта используя ts

// redux devtools installed
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
