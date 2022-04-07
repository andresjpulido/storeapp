import { GET_RESOURCES } from '../actions/resourceActions';

const initialState = {
  resources: []
}

const result = (state = initialState, action) => {
  switch (action.type) {

    case GET_RESOURCES:
      return {
        ...state,
        resources: action.payload,
      }

    default:
      return { ...state }
  }

}

export default result;