import { combineReducers, compose, createStore } from 'redux';
import deskReducer from './deskReducer';

const rootReducer = combineReducers({
  desk: deskReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// redux devtools installed
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
