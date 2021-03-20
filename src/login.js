import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import { Button } from '@material-ui/core'

class AppLoginButton extends React.Component{
  render(){
      return(
        <Button variant = "contained" color = "primary">Applicant Login</Button>
      )
  };
}

class RecLoginButton extends React.Component{
  render(){
    return(
      <Button variant = "contained" color = "primary">Recruiter Login</Button>
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