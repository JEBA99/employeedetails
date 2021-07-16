import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginCredentials } from '../actions';
import EmployeeList  from '../employeeList/employeeList.js';
import logo from '../logo.svg';
import '../App.css';
import '../css/bootstrap.min.css';
import '../css/loginPage.css';
import { toast } from 'react-toastify';
import '../css/ReactToastify.min.css';


class LoginPage extends Component {
  constructor(props) {
      super(props);
        this.state = {
          userName: '',
          password: '',
          showEmployee: false
        }
      }
  checkLoginCredentials() {
    console.log("User Name", this.props.credentials);
    if(this.props.credentials.username === this.state.userName && this.props.credentials.password === this.state.password) {
      return true
    }
    else {
      toast.info("Your Login Credentials are worong");
      return false
    }
  }
  render() {
    return(
      (this.state.showEmployee) ? <EmployeeList /> :
      <div className="container logincontainer">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required onChange={(event) => { this.setState({userName: event.target.value}); }}/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required onChange={(event) => { this.setState({password: event.target.value}); }} />

        <button type="submit" onClick={(event)=> {(this.checkLoginCredentials()) ? this.setState({showEmployee: true}) : this.setState({showEmployee: false}) }}>Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
      </div>
    )
  }
}

const mapStateToProps = ({ logindetails }) => {
  const { credentials } = logindetails;
	return { credentials };
};

export default connect(mapStateToProps, { loginCredentials } )(LoginPage);

