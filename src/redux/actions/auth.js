import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'
const API_URL = process.env.REACT_APP_API_URL;

// LOGIN FEATURES

export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST'
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE'

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
    id: user.id
  }
}

function loginError(message) {
  return {
    type: 'AUTHENTICATION_FAILURE',
    isAuthenticating: false,
    isAuthenticated: false,
    message
  }
}

export default function login(creds, router) {
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
    return fetch(`${API_URL}/auth`, config)
      .then(response => response.json())
      .then(body => {
        if (body.user.id) {
          localStorage.setItem('tophop.token', body.token);
          dispatch(setCurrentUser(body.user));
          router.replace(`/`)
        } else {
          dispatch(loginError(body.error))
          return Promise.reject(body)
        }
    }).catch(err => console.log("Error: ", err))
  }
}

// LOGOUT FEATURES

// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

// function requestLogout() {
//   return {
//     type: LOGOUT_REQUEST,
//     isAuthenticating: true,
//     isAuthenticated: true
//   }
// }

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isAuthenticating: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    // dispatch(requestLogout())
    localStorage.removeItem('tophop.token')
    dispatch(receiveLogout())
  }
}
// export const signup = (userDetails, router) => {
//   return dispatch => {
//     dispatch(authenticationRequest())
//     return fetch('/users', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ user: userDetails })
//     })
//     .then(response => respons.json())
//     .then(body => {
//       const.slug = body.user.email.split("@")[0]
//       localStorage.setItem('e.tophop.token', body.token;
//       dispatch(setCurrentUser(body.user));
//       dispatch(reset('signup'));
//       router.history.replace(`/users/${slug}`)
//     })
//     .catch(err => {
//       throw new SubmissionError(err)
//     })
//   }
// }
