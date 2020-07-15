import React from "react";
import ExceptRols from "../Helpers/ExceptRols";
import CompanyLoadExcelPage from "../pages/CompanyLoadExcelPage";
import PageAccess from "../MidleWare/PageAccess";

const Page = (props) => (
  <CompanyLoadExcelPage
    {...props}
    PageAccess={PageAccess}
    accesibleBy={ExceptRols(props.ExcludeRolsList)}
  />
);

const routes = [
  {
    page: <Page ExcludeRolsList={["Model"]} />,
    path: "/company/loadExcel/:company_id",
  },
];

export default routes;
