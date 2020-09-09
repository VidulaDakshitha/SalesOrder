import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_navcustomer";
// routes config
import routes from "../../routes";

import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";
const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));



const SalesManagement =React.lazy(() => import("../../views/SalesManagement/Dashboard"));
const Employee=React.lazy(() => import("../../views/EmployeeManagement/EmployeeDashboard"));
const Offer=React.lazy(() => import("../../views/EmployeeManagement/Offer"));
const SupplierDisplay=React.lazy(() => import("../../views/SupplierManagement/SupplierDisplay"));
const SupplierAdd=React.lazy(() => import("../../views/SupplierManagement/SupplierAdd"));

const CustomerOrders=React.lazy(() => import("../../views/CustomerManagement/CustomerManagement"));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class DefaultLayoutEmployee extends Component {
  // loading = () => (
  //   <div className="animated fadeIn pt-1 text-center">Loading...</div>
  // );

   loading = () => (
    <div>
      <DotLoader css={override} size={150} color={"#03081b"} loading="true" />
    </div>
  );

  signOut(e) {
    e.preventDefault();
    //this.props.history.push("/login");
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
        
          <AppSidebar fixed display="lg">
          
            <AppSidebarHeader />
            
            <AppSidebarForm />
            <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
          <p>{routes.name}</p>
            {/* <AppBreadcrumb appRoutes={routes} router={routes.component} /> */}
            {/* appRoutes={routes} router={router} */}
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {/* {routes.map((route, idx) => {
                    return route.component &&localStorage.getItem("AccessToken")!==null ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })} */}

           

              <Route
              exact
              path="/customer/orderinfo"
              name="orderinfo"
              render={(props) => <CustomerOrders {...props} />}
            />

          


                  <Redirect from="/customer" to="/login" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayoutEmployee;
