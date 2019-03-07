import { LOAD_ALL_SYMBOLS } from '../actions'

function allSymbolReducer(state = [], action){
    switch(action.type){
        case LOAD_ALL_SYMBOLS:{
            return action.symbols;
        }
        default: {
            return state;
        }
    }
    
}

export default allSymbolReducer;