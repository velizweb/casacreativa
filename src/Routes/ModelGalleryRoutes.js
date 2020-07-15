import React from "react";
import ExceptRols from "../Helpers/ExceptRols";
import ModelGalleryPage from "../pages/ModelGalleryPage";
import PageAccess from "../MidleWare/PageAccess";

const Page = props => (
  <ModelGalleryPage
    {...props}
    PageAccess={PageAccess}
    accesibleBy={ExceptRols(props.ExcludeRolsList)}
  />
);

const exclude = ["Admin", "Super admin", "Monitor"];
const routes = [
  {
    page: <Page ExcludeRolsList={exclude} list />,
    path: "/model/gallery/:company_id",
  },
  {
    page: <Page ExcludeRolsList={exclude} create />,
    path: "/model/gallery/create/:company_id",
  },
];

export default routes;
