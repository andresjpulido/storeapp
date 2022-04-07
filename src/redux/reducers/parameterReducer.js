import { GET_PARAMETERS } from "../actions/parameterActions";

const initialState = {
	parameters: [],
};

const result = (state = initialState, action) => {
	switch (action.type) {
		case GET_PARAMETERS:
			return {
				...state,
				pending: false,
				error: action.error,
				parameters: action.payload,
			};

		default:
			return { ...state };
	}
};

export default result;
export const getParameters = (state) => state.parameters;
