import axios from 'axios'

import {GET_HOURS_URL } from '../constants/webservices'

export const GET_HOURS = "GET_HOURS"
export const ADD_HOUR = "ADD_HOUR"

export const getHours = (username)=>{
    
    let token = localStorage.getItem('session')
    console.log("URL " + GET_HOURS_URL + "/" + username + "/false")
    
    return (dispatch, getState)=>{
        axios.get(GET_HOURS_URL + "/" + username + "/false",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded'
              } 
        })
        .then((response) => {
            console.log("recibiendo resPuesta de servicio getHours ",response.data)
            dispatch( { type: GET_HOURS, payload: response.data } ) 
             
        }, (error) => {
            //dispatch( { type: SIGNIN, payload: error } ) 
            console.log(error);
                       
        }) 
    }
}
 
export const addHour = (user)=>{
    console.log("insertando ", user)
    return (dispatch, getState)=>{
        axios.post('http://localhost:4000/api/hour',{
            id_emp: user.id_emp,
            activity: user.activity,
            start_date: user.start_date,
            end_date: user.end_date
        })
        .then((response) => {
            console.log("recibiendo res[uesta de servicio addHour ",response.data)
            dispatch( { type: ADD_HOUR, payload: response.data } ) 
             
        }, (error) => {
            //dispatch( { type: SIGNIN, payload: error } ) 
            console.log(error);
                       
        }) 
    }
}