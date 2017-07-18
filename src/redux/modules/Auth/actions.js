import 'isomorphic-fetch';

/* action creators - only synchronous functions */

export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

/* async actions - plug into rails api */

export const signup = (user, router) => {
  return dispatch => {
    dispatch(authenticationRequest())
    return
  }
}
