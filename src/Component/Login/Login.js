import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import swal from "sweetalert";
class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let check = true;
    if (token == null) {
      check = false;
    }
    this.state = {
      email: "",
      password: "",
      check
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  submitForm(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "admin" && password === "admin") {
      localStorage.setItem("token", "asdasda");
      this.setState({
        check: true
      });
    } else {
      swal({
        icon: "error",
        title: "Oops...",
        text: "Sai tài khoản hoặc mật khẩu",
        footer: "<a href>Why do I have this issue?</a>"
      });
    }
  }
  render() {
    if (this.state.check) {
      return <Redirect to="/Admin" />;
    }
    return (
      <div className="Background">
        <div style={{ marginTop: 100 }} className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fab fa-facebook-square" />
                  </span>
                  <span>
                    <i className="fab fa-google-plus-square" />
                  </span>
                  <span>
                    <i className="fab fa-twitter-square" />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={this.submitForm}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <input
                      onChange={this.handleEmailChange}
                      type="text"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key" />
                      </span>
                    </div>
                    <input
                      onChange={this.handlePasswordChange}
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<a href="#">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
