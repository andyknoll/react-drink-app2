// loginScreen.js

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginScreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }

  componentWillMount(){
    var loginScreen=[];
    loginScreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
        loginScreen:loginScreen,
        loginmessage:loginmessage
    })
  }

  render() {
    return (
      <div className="loginScreen">
        {this.state.loginScreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }

  handleClick(event){
    // console.log("event",event);
    var loginmessage;
    var loginScreen=[];

    if(this.state.isLogin){
      loginScreen.push(<Register parentContext={this}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
        loginScreen:loginScreen,
        loginmessage:loginmessage,
        buttonLabel:"Login",
        isLogin:false
      })
    }
    else {
      loginScreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
        loginScreen:loginScreen,
        loginmessage:loginmessage,
        buttonLabel:"Register",
        isLogin:true
      })
    }
  }

}

const style = {
  margin: 15,
};

export default LoginScreen;
