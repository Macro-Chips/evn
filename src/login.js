import React from "react";
import { Button } from '@material-ui/core'

class AppLoginButton extends React.Component{
  render(){
      return(
        <Button>Applicant Login</Button>
      )
  };
}

class RecLoginButton extends React.Component{
  render(){
    return(
      <Button>Recruiter Login</Button>
    )
};
}

export default function Login() {
    return (
      <div>
        <h1>evn</h1>
        <AppLoginButton/>
        <RecLoginButton/>
      </div>
    );
  }