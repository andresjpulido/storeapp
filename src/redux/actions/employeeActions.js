 
export const FETCH_EMPLOYEES_PENDING = 'FETCH_EMPLOYEES_PENDING';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_ERROR = 'FETCH_EMPLOYEES_ERROR';

function fetchEmployeesPending() {
    return {
        type: FETCH_EMPLOYEES_PENDING
    }
}

function fetchEmployeesSuccess(employees) {
    return {
        type: FETCH_EMPLOYEES_SUCCESS, 
        payload :{ employees }
    }
}

function fetchEmployeesError(error) {
    return {
        type: FETCH_EMPLOYEES_ERROR,
        error: error
    }
}
 

export {fetchEmployeesSuccess, fetchEmployeesPending, fetchEmployeesError};

