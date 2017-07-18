import React from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
const  { DOM: { input } } = React

const LoginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
    return (
      <div className="login">
        <h3>Welcome back!</h3>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component={input} type="email" placeholder="Email"/>
          </div>
        </div>
        <div>
          <label>Password</label>
          <Field name="password" component={password =>
            <div>
              <input type="password" {...password} placeholder="Password"/>
              {password.touched && password.error && <span>{password.error}</span>}
            </div>
          }/>
        </div>
      </div>
    )
  }


export default reduxForm({
  form: 'login'
})(LoginForm);
