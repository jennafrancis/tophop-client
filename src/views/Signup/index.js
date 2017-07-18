import React, { Component } from 'react';

const Signup = () =>
  <form className="signup_form">
    <div>
      <label>Email</label><br />
      <input type="email" />
    </div>
    <br></br>
    <div>
      <label>Password</label><br />
      <input type="password" />
    </div>
    <br></br>
    <button type="submit">Create User</button>
  </form>

export default Signup;
