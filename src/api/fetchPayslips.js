import {fetchPayslipsPending, fetchPayslipsSuccess, fetchPayslipsError} 
from '../redux/actions/payslipActions';

function fetchSlips() {

    console.log("fetchSlips ***************")
    return dispatch => {
        //dispatch(fetchEmployeesPending());
        fetch('http://localhost:4000/api/payslips', { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlhdCI6MTU3MDM0MzIwNywiZXhwIjoxNTcxNTUyODA3fQ.-IYW5S9E5vuvotQFvLB0XHJjf_Eln6In-aJk3LBez08',
              'Content-Type': 'application/x-www-form-urlencoded'
            })  
          })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            console.log(res)
            dispatch(fetchPayslipsSuccess(res));
            return res;
        })
        .catch(error => {
            console.log(error)
            dispatch(fetchPayslipsError(error));
        })
    }
}

export default fetchSlips;

 