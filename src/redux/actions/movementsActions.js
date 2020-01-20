import axios from 'axios'
import {GET_MOV_URL} from '../constants/webservices'

export const GET_MOVEMENT = 'GET_MOVEMENT';
    
function getMovements(){

    let token = localStorage.getItem('session')
    
    return (dispatch, getState)=>{
        axios.get(GET_MOV_URL,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded'
              } 
        })
        .then((response) => {            
            dispatch( { type: GET_MOVEMENT, payload: response.data } ) 
             
        }, (error) => {            
            console.log(error);
                       
        }) 
    }
}    

export { getMovements };

