import React from "react";
import ExceptRols from "../Helpers/ExceptRols";
import ModelPenaltiesPage from "../pages/ModelPenaltiesPage";
import PageAccess from "../MidleWare/PageAccess";

const Page = props => (
  <ModelPenaltiesPage
    {...props}
    PageAccess={PageAccess}
    accesibleBy={ExceptRols(props.ExcludeRolsList)}
  />
);

const routes = [
  {
    page: <Page list ExcludeRolsList={["Admin", "Super admin", "Monitor"]} />,
    path: "/model/penalties/:company_id",
  },
];

export default routes;
