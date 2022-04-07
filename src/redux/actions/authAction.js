import { SIGNIN_URL } from '../constants/webservices' 
import { PENDING, FINISHED, ALERT, REDIRECT } from '../constants/ActionTypes'
import axios from 'axios'

export const SIGNIN = "SIGNIN"

export default function signIn(requestObj) {

  return (dispatch, getState) => {

    let actionType = SIGNIN
    let url = SIGNIN_URL

    let token = localStorage.getItem('session')
    //const qs = require('qs'); 
    dispatch({ type: PENDING, payload: null })

    axios.post(url, requestObj, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'
      }
    })

      .then((response) => {

        localStorage.setItem('session', response.data.token);
        dispatch({ type: actionType, payload: response.data })
        dispatch({ type: FINISHED, payload: null })
        dispatch({ type: REDIRECT, payload: "/home" })
        dispatch({ type: REDIRECT, payload: null })
      })

      .catch(function (error) {

        console.log(error)

        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);


          if (error.response.data) {
            dispatch({ type: ALERT, payload: { type: "ERROR", description: error.response.data.message } })
          }

        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
          dispatch({ type: ALERT, payload: { type: "ERROR", description: "No connection with the server." } })

        } else {
          // Something happened in setting up the request that triggered an Error
          dispatch({ type: ALERT, payload: { type: "ERROR", description: error.message } });
        }

        console.log(error.config);

        if (!error.response) {
          dispatch({ type: ALERT, payload: { type: "ERROR", description: "No connection with the server." } })
        }

        dispatch({ type: FINISHED, payload: null })
      })

  }




}