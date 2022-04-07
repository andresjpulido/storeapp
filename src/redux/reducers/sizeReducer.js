import { GET_SIZE } from '../actions/sizeActions';

  const initialState = {
    sizes: [] 
  }
     
const result = (state = initialState, action) => {
    switch (action.type) {
      
      case GET_SIZE:
        return {
          ...state,
          pending: false,
          error: action.error,
          sizes: action.payload,
        }
 
      default:
        return { ...state }
    }
  }
   

  export default result;
  export const getSizes = state => state.sizes; 