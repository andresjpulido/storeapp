 
export const FETCH_PAYSLIPS_PENDING = 'FETCH_PAYSLIPS_PENDING';
export const FETCH_PAYSLIPS_SUCCESS = 'FETCH_PAYSLIPS_SUCCESS';
export const FETCH_PAYSLIPS_ERROR = 'FETCH_PAYSLIPS_ERROR';

function fetchPayslipsPending() {
    return {
        type: FETCH_PAYSLIPS_PENDING
    }
}

function fetchPayslipsSuccess(payslips) {
    console.log("payslips",payslips)
    return {
        type: FETCH_PAYSLIPS_SUCCESS, 
        payload :{ payslips }
    }
}

function fetchPayslipsError(error) {
    return {
        type: FETCH_PAYSLIPS_ERROR,
        error: error
    }
}
 

export {fetchPayslipsSuccess, fetchPayslipsPending, fetchPayslipsError};

