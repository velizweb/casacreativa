import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import NavBar from "../components/Navbar/Component";
import CompanySelector from "../components/CompanySelector/Component";
import AdminMenu from "../components/AdminMenu/Component";
import DashboardStatistics from "../components/DashboardStatistics/Component";
import LoaderPage from "./LoaderPage";
import UserContext from "../Contexts/UserContext";

function DashboardHomePage() {
  const user = useContext(UserContext);

  if (!user.access_token) {
    return <LoaderPage />;
  }

  if (parseInt(user.user_type) === 1) {
    return (
      <div>
        <NavBar />
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={3}>
              <AdminMenu />
            </Grid.Column>
            <Grid.Column width={13}>
              <DashboardStatistics />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={3}>
            <CompanySelector />
          </Grid.Column>
          <Grid.Column width={13}>
            <DashboardStatistics />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default DashboardHomePage;
