import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; 
import { reducer as FilterReducer } from './Redux/Filter/reducer';
import { reducer as SearchReducer } from './Redux/Search/reducer';

const rootReducers = combineReducers({ FilterReducer, SearchReducer });
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
