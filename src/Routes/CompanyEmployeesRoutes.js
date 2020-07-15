import React from "react";
import ExceptRols from "../Helpers/ExceptRols";
import EmployeesPage from "../pages/EmployeesPage";
import PageAccess from "../MidleWare/PageAccess";

const Page = (props) => (
  <EmployeesPage
    {...props}
    PageAccess={PageAccess}
    accesibleBy={ExceptRols(props.ExcludeRolsList)}
  />
);

const routes = [
  {
    page: <Page list ExcludeRolsList={["Model"]} />,
    path: "/company/employees/list/:company_id",
  },
  {
    page: <Page create ExcludeRolsList={["Model"]} />,
    path: "/company/employees/create/:company_id/:model?",
  },
  {
    page: <Page update ExcludeRolsList={["Model"]} />,
    path: "/company/employees/update/:company_id/:user_id",
  },
  {
    page: <Page update ExcludeRolsList={["Model"]} />,
    path: "/company/employee/detail/:company_id/:user_id",
  },
  {
    page: <Page modelsCreate ExcludeRolsList={["Model"]} />,
    path: "/company/employee/create/models/:company_id",
  },
];

export default routes;
