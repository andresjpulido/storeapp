import axios from 'axios'
import { SIGNIN_URL } from '../constants/webservices'

export const SIGNIN = "SIGNIN" 
export const SIGNIN_ERROR = "SIGNIN_ERROR"

export default function signIn (username_, password_){
    
    return (dispatch, getState)=>{
        axios.post(SIGNIN_URL,{
            username: username_,
            password: password_
        })
        .then((response) => {
            console.log("recibiendo respuesta de servicio de autenticacion",response.data)
            dispatch( { type: SIGNIN, payload: response.data } ) 
             
        }, (error) => {
            console.log("error >>", error);
            dispatch( { type: SIGNIN_ERROR, error: {message :"sin resultados" }} ) 
            
                       
        }) 
    }
}