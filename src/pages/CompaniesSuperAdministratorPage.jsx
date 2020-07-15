import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import NavBar from "../components/Navbar/Component";
import AdminMenu from "../components/AdminMenu/Component";
import UserContext from "../Contexts/UserContext";
import LoaderPage from "./LoaderPage";
import CompaniesListSuperAdministrator from "../components/CompaniesListSuperAdministrator/Component";

function CompaniesSuperAdministratorPage(props) {
  const user = useContext(UserContext);

  if (!user.access_token) {
    return <LoaderPage />;
  }

  return (
    <div>
      <NavBar />
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={3}>
            <AdminMenu />
          </Grid.Column>
          <Grid.Column width={13}>
            <CompaniesListSuperAdministrator />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default withRouter(CompaniesSuperAdministratorPage);
