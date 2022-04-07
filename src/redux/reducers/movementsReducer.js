import { GET_MOVEMENT, WEEKLY_REPORT } from '../actions/movementsActions';
import { SHOW_ERRORS } from '../actions/errorActions';  

  const initialState = { 
    movements: [], 
    weeklyMovements: [],
    error:{}
  }
     
const result = (state = initialState, action) => {
    switch (action.type) {
       
      case GET_MOVEMENT:
        return {
          ...state,
          pending: false,
          error: action.error,
          movements: action.payload,
        }
 

      case SHOW_ERRORS:
        return {
          ...state, 
          error: action.error
        }          
      
      case WEEKLY_REPORT:
        return {
          ...state, 
          weeklyMovements: action.payload,
        }         
        
      default:
        return { ...state }
    }
  }
   
  export default result;
  export const getMovements = state => state.movements;
  export const weeklyReport = state => state.weeklyMovements;
   