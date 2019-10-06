import * as types from '../constants/ActionTypes'
import items from './items';  

  const initialState = {orders: [{"id":666}]};
     
  function order (state = initialState, action) {
    switch (action.type) {
      case types.TEST:
        return {
          ...state,
          orders: action.orders
        }
      case types.TEST2:
        console.log("executing TEST2 reduce::action " + action.orders+ " - " + action.error)
        console.log(items)
        
        return {
          ...state,
          orders: items,
          items: items
        }      

      default:
        return state
    }
  }
  
  export default order;