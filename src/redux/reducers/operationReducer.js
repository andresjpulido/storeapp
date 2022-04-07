import { GET_OPERATION } from '../actions/operationActions';

  const initialState = {
    operations: [] 
  }
     
const result = (state = initialState, action) => {
    switch (action.type) {
      
      case GET_OPERATION:
        return {
          ...state,
          pending: false,
          error: action.error,
          operations: action.payload,
        }
 
      default:
        return { ...state }
    }
  }
   

  export default result;
  export const getAllOperations = state => state.operations; 