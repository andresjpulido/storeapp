import * as types from '../constants/ActionTypes'
import { GET_MOVEMENT } from '../actions/movementsActions';
import { SHOW_ERRORS } from '../actions/errorActions';  

  const initialState = { 
    movements: [], 
    error:{}
  }
     
  export default (state = initialState, action) => {
    switch (action.type) {
       
      case GET_MOVEMENT:
        return {
          ...state,
          pending: false,
          error: action.error,
          movements: action.payload,
        }
 

      case SHOW_ERRORS:
        console.log("action.error ::: ",action.error)
        return {
          ...state, 
          error: action.error
        }          
      
      default:
        return { ...state }
    }
  }
   
  export const getMovements = state => state.movements;
   