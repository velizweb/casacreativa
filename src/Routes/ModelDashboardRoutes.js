import React from "react";
import ExceptRols from "../Helpers/ExceptRols";
import ModelDashboardPage from "../pages/ModelDashboardPage";
import PageAccess from "../MidleWare/PageAccess";

const Page = props => (
  <ModelDashboardPage
    {...props}
    PageAccess={PageAccess}
    accesibleBy={ExceptRols(props.ExcludeRolsList)}
  />
);

const routes = [
  {
    page: <Page list ExcludeRolsList={["Admin"]} />,
    path: "/model/dashboard/:company_id",
  },
];

export default routes;
