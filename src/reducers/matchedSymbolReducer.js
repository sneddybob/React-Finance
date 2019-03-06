import { SET_MATCHED_SYMBOLS } from '../actions'

//Reducers are pure functions - the first parameter is the "state" object
//which will need to be the same type of object that eventually gets returned.

//We use reducers because the reducer is automatically invoked by Redux every time
//an event is dispatched from a connected component.


function matchedSymbolsReducer(state = [], action){
    switch(action.type){
        case SET_MATCHED_SYMBOLS:{
            return action.symbol
        }
        default: {
            return state;
        }
    }
    
}

export default matchedSymbolsReducer;