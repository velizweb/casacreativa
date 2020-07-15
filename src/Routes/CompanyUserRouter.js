import React from "react";
import RecoverPasswordPage from "./../pages/RecoverPasswordPage";

const Page = () => <RecoverPasswordPage />;

const routes = [
  {
    page: <Page />,
    path: "/company/user/recoverPassword",
  },
];

export default routes;
