import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import LoginHeader from "./LoginHeader";


function handleClick(item) {
  console.log("id", item.id);
  // window.location = e.target.id;
  // return (
  //     <Routes />
  // )
}
class AppLoginButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.id = "/applicant/jobs";
    this.handleClick = this.handleClick.bind(this);
  }
  render(){
      return(
        <Button variant = "contained" color="primary" onClick={this.handleClick}>Applicant Login</Button>
      )
  };

   handleClick() {
    console.log("id", this.id);
    window.location = this.id;
  }
}

class RecLoginButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.id = "/recruiter/jobs";
    this.handleClick = this.handleClick.bind(this);
  }
  render(){
    return(
      <Button variant = "contained" color ="primary" onClick={this.handleClick} >Recruiter Login</Button>
    )
};
handleClick() {
  console.log("id", this.id);
  window.location = this.id;
}
}


export default function Login() {

  
    return (
      <div>
        {/* <h1>evn</h1> */}
        <LoginHeader />
        <AppLoginButton/>
        <RecLoginButton/>
      </div>
    );
  }