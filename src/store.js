import { combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';
import allSymbolReducer from './reducers/allSymbolReducer';
import watchReducer from './reducers/watchReducer';

//My store is a collection of reducers 
//if I had a simple app, I could just keep all my reducer functions in this file
const store = combineReducers({
    exampleReducer,
    allSymbolReducer,
    watchReducer
})

export default store