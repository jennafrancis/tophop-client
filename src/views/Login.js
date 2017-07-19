import React from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

const doSubmit = values => ajax.post('api/login', { data: values })

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit(doSubmit)}>
    <Field name="email" component="input" type="text" placeholder="Email" />
    <Field name="password" component="input" type="password" placeholder="Password" />
    <button type="submit">Log in</button>
  </form>
)


export default reduxForm({
  form: 'loginForm'
})(LoginForm);
