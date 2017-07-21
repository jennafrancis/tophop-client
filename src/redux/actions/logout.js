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

export default function logoutUser() {
  return dispatch => {
    // dispatch(requestLogout())
    localStorage.removeItem('tophop.token')
    dispatch(receiveLogout())
  }
}
