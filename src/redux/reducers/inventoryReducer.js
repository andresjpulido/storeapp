import * as types from '../constants/ActionTypes'
  
  const initialState = {}
     
  const inventory = (state = initialState, action) => {
    switch (action.type) {
      case types.TEST:
        return initialState
       
      default:
        return {}
    }
  }
  
  export default inventory;