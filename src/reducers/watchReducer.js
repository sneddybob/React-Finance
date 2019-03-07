import { WATCHED_STOCKS } from '../actions'


//Reducers are pure functions - the first parameter is the "state" object
//which will need to be the same type of object that eventually gets returned.

//We use reducers because the reducer is automatically invoked by Redux every time
//an event is dispatched from a connected component.


function watchReducer(state = [], action){
    switch(action.type){
        case WATCHED_STOCKS:{
            state.push(action.watch);
            return state;
        }
        default: {
            return state;
        }
    }
    
}


export default watchReducer;