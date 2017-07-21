function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isAuthenticating: false,
    isAuthenticated: false
  }
}

export default function logoutUser() {
  return dispatch => {
    localStorage.removeItem('tophop.token')
    dispatch(receiveLogout())
  }
}
