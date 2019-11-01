import React from "react";
import { connect } from "react-redux";

import { loginUser } from "../../actions";

import "./login.css";

const Login = (props) => {
  return (
    <div className="login-box">
      <div>
        <h1>Log in</h1>
      </div>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="log-email">
          <label>
            <input className="inpt-log-email" name="email" type="email" placeholder="Email" />
            <hr className="hr-log" />
          </label>
        </div>
        <div className="log-password">
          <label>
            <input
              className="inpt-log-password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <hr className="hr-log" />
          </label>
        </div>
        <div className="buttons-login">
          <button className="btn-login">Log in</button>
          <button className="btn-login" onClick={() => props.loginUser()}>
            Log with fb
          </button>
        </div>
      </form>
    </div>
  );
};

 

export default connect(
  (state) => {
    console.log(state);
    return {
      user: state.user,
     
    };
  },
  { loginUser },
  
)(Login);
