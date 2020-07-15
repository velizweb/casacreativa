import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import NavBar from "../components/Navbar/Component";
import CompanyMenu from "../components/CompanyMenu/Component";
import CompanyStatistics from "../components/CompanyStatistics/Component";
import UserContext from "../Contexts/UserContext";
import LoaderPage from "./LoaderPage";

import UserRolsContext from "../Contexts/UserRolsContext";
import RequestRolsPage from "./RequestRolsPage";

import CompanyPlatformsTotal from "../components/CompanyPlatformsTotal";
import CompanyStatisticsGenerator from "../components/CompanyStatisticsGenerator/Component";
import CompanyStatisticsPlatformDetail from "../components/CompanyStatisticsPlatformDetail";

function CompanyDashboardPage(props) {
  const user = useContext(UserContext);
  const UserRolsDetail = useContext(UserRolsContext);

  if (!user.access_token) {
    return <LoaderPage />;
  }

  if (UserRolsDetail.UserRolsDetail.length === 0) {
    return <RequestRolsPage />;
  }

  if (props.PageAccess(props.accesibleBy, UserRolsDetail.UserRolsDetail)) {
    return (
      <div>
        <NavBar />

        <Grid divided>
          <Grid.Row>
            <Grid.Column width={3}>
              <CompanyMenu />
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid.Row>
                <Grid.Column width={16}>
                  <CompanyStatistics />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid style={{ marginTop: "1em" }}>
                  <Grid.Column width={5}>
                    <CompanyPlatformsTotal />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <CompanyStatisticsGenerator />
                    <CompanyStatisticsPlatformDetail />
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  return "";
}

export default CompanyDashboardPage;
