import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./login";
import AppHome from "./ApplicantPage/Apphome";
import RecHome from "./RecruiterPage/Rechome";
import Candidates from "./RecruiterPage/Candidates";
import Form from "./ProfilePage/Form";


export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Form />
        </Route>
        <Route path="/applicant/jobs">
          <AppHome />
        </Route>
        <Route path="/recruiter/jobs/candidates">
          <Candidates />
        </Route>
        <Route path="/recruiter/jobs">
          <RecHome />
        </Route>
        
      </Switch>
    </Router>
  )
}