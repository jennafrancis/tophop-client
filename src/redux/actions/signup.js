import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'
const API_URL = process.env.REACT_APP_API_URL;

function authenticationRequest(creds) {
  return {
    type: 'AUTHENTICATION_REQUEST',
    isAuthenticating: true,
    isAuthenticated: false,
    creds
  }
}

function setCurrentUser(user) {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    isAuthenticating: false,
    isAuthenticated: true,
    currentUser: user
  }
}

function signupError(message) {
  return {
    type: 'AUTHENTICATION_FAILURE',
    isAuthenticating: false,
    isAuthenticated: false,
    message
  }
}

export default function signup(creds, router) {
  let config = {
    method: 'POST',
    body: JSON.stringify({
      user: creds
    }),
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    dispatch(authenticationRequest(creds))
    return fetch(`${API_URL}/users`, config)
    .then(response => response.json())
    .then(body => {
      if (body.user.id) {
        localStorage.setItem('tophop.token', body.token);
        dispatch(setCurrentUser(body.user));
        router.replace(`/`)
        // const.slug = body.user.email.split("@")[0] <-- for future implementation
        // router.history.replace(`/users/${slug}`)
      } else {
        dispatch(signupError(body.errr))
        return Promise.reject(body)
      }
    }).catch(err => console.log("Error: ", err))
  }
}
