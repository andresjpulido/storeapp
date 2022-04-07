import { CREATE_IMAGES, GET_IMAGES } from '../actions/imageActions';

const initialState = {
  error: {},
  images: []
}

const result = (state = initialState, action) => {
  switch (action.type) {

    case GET_IMAGES:
      return {
        ...state,
        pending: false,
        error: action.error,
        images: action.payload,
      }

      case CREATE_IMAGES:
        return {
          ...state,
          pending: false,
          error: action.error
        }

    default:
      return { ...state }
  }
}

export default result;
export const getImages = state => state.images;
export const createImage = state => state.image;