import React from "react";
import ExceptRols from "../Helpers/ExceptRols";
import ModelLearningPage from "../pages/ModelLearningPage";
import PageAccess from "../MidleWare/PageAccess";

const Page = props => (
  <ModelLearningPage
    {...props}
    PageAccess={PageAccess}
    accesibleBy={ExceptRols(props.ExcludeRolsList)}
  />
);

const routes = [
  {
    page: <Page list ExcludeRolsList={["Admin", "Super admin", "Monitor"]} />,
    path: "/model/learning/:company_id",
  },
  {
    page: <Page find ExcludeRolsList={["Admin", "Super admin", "Monitor"]} />,
    path: "/model/learning/find/:company_id/:item_id",
  },
];

export default routes;
