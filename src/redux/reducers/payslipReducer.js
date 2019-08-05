import * as types from '../constants/ActionTypes'
  
  const initialState = []
     
  const payslip = (state = initialState, action) => {
    switch (action.type) {
      case types.TEST:
        return initialState
       
      default:
        return []
    }
  }
  
  export default payslip;