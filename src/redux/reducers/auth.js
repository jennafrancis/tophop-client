const initialState = {
  isAuthenticated: localStorage.getItem('tophop.token') ? true : false,
  isAuthenticating: false,
  currentUser: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
        isAuthenticating: true,
      }
    case 'AUTHENTICATION_SUCCESS':
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user
      }
    case 'AUTHENTICATION_FAILURE':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticating: true,
        isAuthenticated: false
      })
    default:
      return state;
  }
}
