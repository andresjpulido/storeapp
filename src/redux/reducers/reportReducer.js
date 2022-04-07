import { FETCH_PRODUCTION_REPORT } from '../actions/reportActions';

const initialState = {
    pending: false,
    report: {},
    error: null
}

const result = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PRODUCTION_REPORT:
            return {
                ...state,
                report: action.payload
            }

        default:
            return { ...state }
    }
}

export default result;
export const getProductionReport = state => state.report;
