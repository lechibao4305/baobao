import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            ad: localStorage.getItem("ad"),
            us: false,
            id: localStorage.getItem("id")
        };

        this.onchangeUserName = this.onchangeUserName.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);
    }

    onchangeUserName(e) {
        this.setState({ email: e.target.value })
    }

    onchangePassword(e) {
        this.setState({ password: e.target.value });

    }
    setStateLogin() {



    }

    onSubmit() {
        if (this.state.email === "admin" && this.state.password === "admin") {
            this.setState({ ad: true })
        }
        else {



            Axios.post("http://localhost:4000/user/login",
                { email: this.state.email, password: this.state.password })
                .then(res => {
                    if (res.data.stt === "Loging") {
                        this.setState({ us: true })
                    }
                })
        }
    }
    RenderRedirect() {

        if (this.state.ad) {
            localStorage.setItem("ad", this.state.ad)
            return <Redirect to={{ pathname: "/create" }} />
        }
        else if (this.state.us) {
            return <Redirect to={{ pathname: "/" }} />
        }
    }


    render() {
        return (
            <div className="login">
                {this.RenderRedirect()}
                <form onSubmit={this.displayLogin}>
                    <h2>Login</h2>
                    <div className="username">
                        <input
                            type="text"
                            placeholder="Username..."
                            value={this.state.email}
                            onChange={this.onchangeUserName}
                            name="email"
                        />
                    </div>

                    <div className="password">
                        <input
                            type="password"
                            placeholder="Password..."
                            value={this.state.password}
                            onChange={this.onchangePassword}
                            name="password"
                        />
                    </div>

                    <input className="btn btn-success" onClick={() => { this.onSubmit() }} value="Login" />
                </form>

                <Link to="/register">Create an account</Link>
            </div>
        );
    }
}

export default Login;
