import { PENDING, FINISHED, SHOW_ERRORS, ALERT, REDIRECT } from '../constants/ActionTypes'

const initialState = {
  pending: false,
  alert: {
    type: "",
    code: "",
    description: "",
    visible: false
  }
}

const result = (state = initialState, action) => {
  switch (action.type) {

    case PENDING:
      return {
        ...state,
        pending: true
      }

    case FINISHED:
      return {
        ...state,
        pending: false
      }

    case ALERT:
      return {
        ...state,
        alert: action.payload,
      }

    case SHOW_ERRORS:
      return {
        ...state,
        error: action.error,
      }

    case REDIRECT:
      return {
        ...state,
        redirectTo: action.payload
      }

    default:
      return { ...state }

  }
}


export default result;
export const showErrors = state => state.errors;