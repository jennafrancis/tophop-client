import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'
const API_URL = process.env.REACT_APP_API_URL;

export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST'
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'

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

// createBeer(beer) {
//   const request = {
//     method: 'POST',
//     body: JSON.stringify({
//       beer: beer
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   }
//
//   return fetch(`${API_URL}/beers`, request)
//     .then(response => response.json())
// },

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
    debugger
    return fetch(`${API_URL}/auth`, config)
      .then(response => response.json())
      .then(body => {
        debugger
        localStorage.setItem('e.tophop.token', body.token);
        dispatch(setCurrentUser(body.user));
        router.history.replace(`/`)
    })
    // .catch(err => {
    //   throw new SubmissionError(err)
    // })
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
