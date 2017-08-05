import React, { Component } from 'react';
import { connect } from 'react-redux';
import signup from '../../redux/actions/signup'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      admin: false
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleRadio = event => {
    const isAdmin = event.currentTarget.value === "true" ? true: false;
    this.setState({
      admin: isAdmin
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
    this.setState({
      email: '',
      password: '',
      admin: false
    })
  }

  render() {
    return (
      <div>
        <h2>Sign up here. Cheers!</h2>
        <form>
          <div>
            <label>Email:</label><br />
            <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange}/>
          </div>
          <br></br>
          <div>
            <label>Password:</label><br />
            <input name="password" type="password" value={this.state.password} onChange={this.handleOnChange} />
          </div>
          <br></br>
          <div>
            <label htmlFor="featured">Are you an admin? </label>
            <input type="radio" name="admin" value="true" onClick={this.handleRadio} /> Yes
            <input type="radio" name="admin" value="false" onClick={this.handleRadio} /> No
          </div>
          <br></br>
          <button onClick={this.handleOnSubmit}>Log in</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(LoginForm)
