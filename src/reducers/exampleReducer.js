import { EXAMPLE_ACTION } from '../actions'


//Reducers are pure functions - the first parameter is the "state" object
//which will need to be the same type of object that eventually gets returned.

//We use reducers because the reducer is automatically invoked by Redux every time
//an event is dispatched from a connected component.


function exampleReducer(state = [], action){
    switch(action.type){
        case EXAMPLE_ACTION:{
            state.push(action.change);
            return state;
        }
        default: {
            return state;
        }
    }
    
}


export default exampleReducer;