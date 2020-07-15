import React from "react";
import RecoverPassword from "../components/RecoverPassword/Component";
import NavBar from "../components/Navbar/Component";
import { Grid, Segment } from "semantic-ui-react";

function RecoverPasswordPage() {
  return (
    <div>
      <NavBar />
      <Grid verticalAlign="middle" columns={6} centered>
        <Grid.Row style={{ height: "60vh" }}>
          <Grid.Column width={6}>
            <Segment>
              <h3>Recuperar Contraseña</h3>
              <RecoverPassword />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default RecoverPasswordPage;
