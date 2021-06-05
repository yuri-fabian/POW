import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Form } from "reactstrap";

import Navigation from "../components/Navigation";
import LandingPage from "../Landing/Landing";
import SignUpPage from "../auth/SignUp";
import SignInPage from "../auth/SignIn";
import PasswordForgetPage from "../auth/PasswordForget";
import AccountPage from "../auth/Account";
import * as routes from "../constants/routes";
import Home from "../Home";
import withAuthentication from "../auth/withAuthentication";
import FormData from "../components/Form";
import CustomerEdit from "./CustomerEdit";

const App = () => (
  <BrowserRouter>
    <Container>
      <Navigation />
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />

      <Route path="/estate/:key" component={FormData} />
    </Container>
  </BrowserRouter>
);

export default withAuthentication(App); //using HoC to handle session
