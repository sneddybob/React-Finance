import { WATCHED_STOCKS } from '../actions'
import { REMOVE_STOCKS } from '../actions'


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
        

        case REMOVE_STOCKS:{
            state.slice(action.slice);
            return state;
            }
        default: {
            return state;
            }
        }
    
}

const mapStateToProps = (state) => {
    return {
     watch: state.watchReducer 
    }
  }

export default watchReducer;