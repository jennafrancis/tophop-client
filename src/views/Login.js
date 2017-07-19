import React from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm, handleSubmit } from 'redux-form'

// const doSubmit = values => ajax.post('api/login', { data: values })

let authenticateUser = () => {
  alert("this part is complicated :(")
}

const LoginForm = ({ handleSubmit }) => (
  <div>
    <h3>Welcome back! Sign in to continue.</h3>
    <form onSubmit={handleSubmit(authenticateUser)}>
      <div>
        <label>Email:</label><br />
        <Field name="email" component="input" type="email" placeholder="Email" />
      </div>
      <br></br>
      <div>
        <label>Password:</label><br />
        <Field name="password" component="input" type="password" placeholder="Password" />
      </div>
      <br></br>
      <button type="submit">Log in</button>
    </form>
  </div>
)


export default reduxForm({
  form: 'loginForm'
})(LoginForm);
