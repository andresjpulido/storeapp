import * as types from '../constants/ActionTypes'
import items from '../reducers/items';  
const findOrders = (text, error) => ({
    type: types.TEST2,
    orders: text,
    error: error
});

export default findOrders;
 
export const getAllOrders = () => dispatch => {
    console.log("getAllOrders")
      dispatch(findOrders(items))
    
  }
 