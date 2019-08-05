import * as types from '../constants/ActionTypes'
  
  const initialState = [{
    "name": "Juan Daniel Arias",
    "id": 1,
    "notes": "",
    "active": true,
    "phone" : "021 345 543"
},
{
    "name": "Juan",
    "id": 2,
    "notes": "",
    "active": true,
    "phone" : "021 345 543"
},
{
    "name": "Ernesto Ovalle",
    "id": 3,
    "notes": "",
    "active": true,
    "phone" : "021 345 543"
},
{
    "name": "Andres Pulido",
    "id": 4,
    "notes": "",
    "active": true,
    "phone" : "021 345 543"
}]
    //mapear todos los reducers
  
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case types.TEST:
        return initialState
      case types.TEST:
        return action.cart
      case types.GET_ALL_EMP:
        console.log("ejecutando esta cosa");
        return initialState
      default:
        return initialState
    }
  }
  
  export default cart
  