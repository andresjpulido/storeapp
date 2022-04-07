import { GET_PAYSLIPS, GET_PAYSLIP, ADD_PAYSLIP } from '../actions/payslipActions';

const initialState = {
  payslips: [],
  payslip: {}
}

const result = (state = initialState, action) => {
  switch (action.type) {

    case GET_PAYSLIPS:
      return {
        ...state,
        pending: false,
        payslips: action.payload,
      }

    case GET_PAYSLIP:
      return {
        ...state,
        payslip: action.payload
      }

    case ADD_PAYSLIP:
      return {
        ...state
      }

    default:
      return { ...state }

  }
}

export default result;
export const getPayslips = state => state.payslips;
export const getPayslipsPending = state => state.pending;
export const getPayslipsError = state => state.error;
