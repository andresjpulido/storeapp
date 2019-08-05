import * as types from '../constants/ActionTypes'
 
const findEmployees = (text) => ({
    type: types.GET_ALL_EMP,
    payload: text,
});

export default findEmployees;
