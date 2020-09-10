import React, { Component } from "react";
import { HashRouter, Route, Switch,Redirect } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from "react-spinners/DotLoader";
import "./App.scss";
import Home from "./views/Pages/Home/Home";
import Offers from "./views/Pages/Offers/Offers";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const loading = () => (
  <div>
    <DotLoader css={override} size={150} color={"#123abc"} loading="true" />
  </div>
);
// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const DefaultLayoutEmployee=React.lazy(() => import("./containers/DefaultLayout/DefaultLayoutEmployee"));

const HomePagee=React.lazy(() => import("./views/Pages/Home/Home"));


const DefaultLayoutOrder=React.lazy(() => import("./containers/DefaultLayout/DefaultLayoutOrder"));
const DefaultLayoutCustomer=React.lazy(() => import("./containers/DefaultLayout/DefaultLayoutCustomer"));


// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));
const Profile = React.lazy(() => import("./views/CustomerManagement/Profile"));

const PrivateRouteUser = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    //fakeAuth.isAuthenticated === true
    localStorage.getItem("AccessToken")!==""
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/#/login',

        }} />

  )} />
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/offers"
              name="Offer Page"
              render={(props) => <Offers {...props} />}
            />
            <Route
              exact
              path="/profile"
              name="Profile Page"
              render={(props) => <Profile {...props} />}
            />
            <Route
              exact
              path="/main"
              name="Main Page"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />

              <Route
              path="/order"
              name="Order"
              render={(props) => <DefaultLayoutOrder {...props} />}
            />


              <Route
              path="/employee"
              name="Employee"
              render={(props) => <DefaultLayoutEmployee {...props} />}
            />

            <Route
              path="/customer"
              name="Customer"
              render={(props) => <DefaultLayoutCustomer {...props} />}
            />


            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />





          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
