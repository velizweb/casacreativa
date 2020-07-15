import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import NavBar from "../components/Navbar/Component";
import AdminMenu from "../components/AdminMenu/Component";
import UserContext from "../Contexts/UserContext";
import LoaderPage from "./LoaderPage";
import CompaniesList from "../components/CompaniesList/Component";
import CompaniesCreate from "../components/CompaniesCreate/Component";
import CompaniesUpdate from "../components/CompaniesUpdate/Component";
import CompaniesListSuperAdministrator from "../components/CompaniesListSuperAdministrator/Component";

function CompaniesPage(props) {
  const user = useContext(UserContext);

  if (!user.access_token) {
    return <LoaderPage />;
  }

  if (parseInt(user.user_type) !== 1) {
    return <div>No tienes permisos para visualizar esta pagina</div>;
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
            {props.list && <CompaniesList />}

            {props.create && <CompaniesCreate />}

            {props.update && <CompaniesUpdate />}

            {props.owner && <CompaniesListSuperAdministrator />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default withRouter(CompaniesPage);
