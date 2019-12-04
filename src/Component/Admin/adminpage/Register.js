import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props);  
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangePassword2 = this.onChangePassword2.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {  
			name: '',
			email: '',
			password: '',
			password2:''
		}; 
	}

	onChangeName(e) {
        this.setState({
            name: e.target.value
        });
	}
	onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
	}
	onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
	}
	onChangePassword2(e) {
        this.setState({
            password2: e.target.value
        });
    }
	
	onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
        };
        axios.post('http://localhost:4000/user/register', obj)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            email: '',
			password: '',
			password2: ''
        })
    }
 
	render() {
		return (
			<div className="register">
				<form onSubmit={this.onSubmit}>
					<h2>Register</h2>

					<div className="name">
					<label> Name: </label>
					<input type="text" className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeName}
                        />
					</div>

					<div className="email">
					<label>Email: </label>
					<input type="text" className="form-control" 
								value={this.state.email}
                               onChange={this.onChangeEmail}/>
					</div>

					<div className="pasword">
					<label>password: </label>
					<input type="password" className="form-control" 
								value={this.state.password}
                               onChange={this.onChangePassword}/>
					</div>  
					<div className="pasword">
					<label>password confirm: </label>
					<input type="password" className="form-control" 
								value={this.state.password2}
                               onChange={this.onChangePassword2}/>
					</div>
					<div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Register;
