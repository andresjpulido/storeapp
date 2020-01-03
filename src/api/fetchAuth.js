import {fetchEmployeesPending, fetchEmployeesSuccess, fetchEmployeesError} 
from '../redux/actions/employeeActions';

function fetchAuth() {

    var formData = new FormData();
    formData.append('username', 'abc666');
    formData.append('email', '');

    var data = {
        username:'abc123',
        email:''
    }
    
    return dispatch => {

        console.log(formData)
        
        //dispatch(fetchEmployeesPending());
        fetch('http://localhost:4000/api/signIn', { 
            method: 'post', 
            /*headers: new Headers({               
              'Content-Type': 'application/x-www-form-urlencoded'
            }),*/
            body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            console.log(res)
            //dispatch(fetchEmployeesSuccess(res));
            return res;
        })
        .catch(error => {
            console.log(error)
            //dispatch(fetchEmployeesError(error));
        })
    }
}

export default fetchAuth;

 