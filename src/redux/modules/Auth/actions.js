import 'isomorphic-fetch';
import { reset, SubmissionError } from 'reduc-form'

export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = user => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}

export const signup = (userDetails, router) => {
  return dispatch => {
    dispatch(authenticationRequest())
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
    .then(response => respons.json())
    .then(body => {
      const.slug = body.user.email.split("@")[0]
      localStorage.setItem('e.tophop.token', body.token;
      dispatch(setCurrentUser(body.user));
      dispatch(reset('signup'));
      router.history.replace(`/users/${slug}`)
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}
