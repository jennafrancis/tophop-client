import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'

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
    id_token: user.id_token
  }
}

export default function login(creds, router) {
  let config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: creds })
  }

  return dispatch => {
    dispatch(authenticationRequest(creds))
    return fetch('/auth', config)
    .then(response => response.json())
    .then(body => {
      localStorage.setItem('e.tophop.token', body.token);
      dispatch(setCurrentUser(body.user));
      dispatch(reset('login'));
      router.history.replace(`/`)
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
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
