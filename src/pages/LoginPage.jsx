import React, { useContext } from "react";
import Login from "../components/Login/Component";
import NavBar from "../components/Navbar/Component";
import DashboardHomePage from "../pages/DashboardHomePage";
import UserContext from "../Contexts/UserContext";
import { Grid, Segment } from "semantic-ui-react";

function LoginPage() {
  const user = useContext(UserContext);

  if (user.access_token) {
    return <DashboardHomePage />;
  }

  return (
    <div>
      <NavBar />
      <Grid verticalAlign="middle" columns={6} centered>
        <Grid.Row style={{ height: "80vh" }}>
          <Grid.Column width={6}>
            <Segment>
              <h3>Inicia sesion</h3>
              <Login redirect={true} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default LoginPage;
