import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Segment, Grid } from "semantic-ui-react";

function Step2(props) {
  function nextHandler() {
    props.incremetStepHeader();
    props.nextStep();
  }

  function backHandler() {
    props.decremetStepHeader();
    props.previousStep();
  }

  return (
    <Grid.Column>
      <Segment>
        <Form.Field
          label="Direccion de vivienda"
          control="input"
          name="housing_address"
          value={props.Employee.housing_address}
          onChange={e => props.handleChange(e.target.value, e.target.name)}
        />

        <Form.Field
          label="Telefono primario"
          control="input"
          name="primary_phone"
          value={props.Employee.primary_phone}
          onChange={e => props.handleChange(e.target.value, e.target.name)}
        />

        <Form.Field
          label="Telefono secundario"
          control="input"
          name="secondary_phone"
          value={props.Employee.secondary_phone}
          onChange={e => props.handleChange(e.target.value, e.target.name)}
        />

        <Form.Field
          label="Correo electronico"
          control="input"
          name="email"
          value={props.Employee.email}
          onChange={e => props.handleChange(e.target.value, e.target.name)}
        />

        <Button.Group attached="bottom">
          <Button positive onClick={backHandler}>
            Atras
          </Button>
          <Button
            positive
            onClick={nextHandler}
            disabled={
              !props.Employee.primary_phone ||
              !props.Employee.secondary_phone ||
              !props.Employee.email
                ? true
                : false
            }
          >
            Siguiente
          </Button>
        </Button.Group>
      </Segment>
    </Grid.Column>
  );
}

export default withRouter(Step2);
