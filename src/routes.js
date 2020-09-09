import React from "react";

const Dashboard = React.lazy(() => import("./views/SalesManagement"));

const Sales = React.lazy(() => import("./views/SalesManagement/Sales/Sales"));
const Payment = React.lazy(() =>
  import("./views/SalesManagement/Payment/Payment")
);
const Overhead = React.lazy(() =>
  import("./views/SalesManagement/OverheadExpense/OverheadExpense")
);

const Employee = React.lazy(() =>
  import("./views/EmployeeManagement/EmployeeDashboard")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/employee", exact: true, name: "Employee" },
  localStorage.getItem("user") === "sales" ? (
    { path: "/salesmanagement", name: "Dashboard", component: Dashboard }
  ) : (
    <></>
  ), //added home

  localStorage.getItem("user") === "sales" ? (
    { path: "/salesmanagemnt/sales", name: "Sales", component: Sales }
  ) : (
    <></>
  ), //added home

  localStorage.getItem("user") === "sales" ? (
    { path: "/salesmanagemnt/payment", name: "Payment", component: Payment }
  ) : (
    <></>
  ), //added home

  localStorage.getItem("user") === "sales" ? (
    {
      path: "/salesmanagemnt/overheadexpense",
      name: "Overheadexpense",
      component: Overhead,
    }
  ) : (
    <></>
  ),

  { path: "/employee", exact: true, name: "Employee" },

  {
    path: "/employee/employeemanagement",
    name: "EmployeeManagemnt",
    component: Employee,
  }, //added home
];

export default routes;
