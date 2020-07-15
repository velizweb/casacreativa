import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Segment, Grid, Select, Input, Icon } from "semantic-ui-react";

function Step1(props) {
  const genderOptions = [
    { key: "1", text: "Masculino", value: "Male" },
    { key: "2", text: "Femenino", value: "Female" },
    { key: "3", text: "Transgenero", value: "Trasgender" },
    { key: "4", text: "Pareja", value: "Couple" },
  ];

  const idOptions = [
    { key: "1", text: "Cedula de ciudadania", value: "Citizenship Card" },
    { key: "2", text: "Cedula de extrangeria", value: "Foreigner ID" },
    { key: "3", text: "Pasaporte", value: "Passport'" },
    { key: "4", text: "PEP", value: "PEP" },
  ];

  function nextHandler() {
    props.incremetStepHeader();
    props.nextStep();
  }

  return (
    <Grid.Column>
      <Segment>
        <Form.Field>
          <label>Nombres</label>
          <Input iconPosition="left" fluid>
            <Icon name="pencil" />
            <input
              icon="users"
              control="input"
              name="first_name"
              value={props.Employee.first_name}
              onChange={e => props.handleChange(e.target.value, e.target.name)}
            />
          </Input>
        </Form.Field>

        <Form.Field>
          <label>Apellidos</label>
          <Input iconPosition="left" fluid>
            <Icon name="pencil" />
            <input
              icon="users"
              control="input"
              name="last_name"
              value={props.Employee.last_name}
              onChange={e => props.handleChange(e.target.value, e.target.name)}
            />
          </Input>
        </Form.Field>

        <Form.Field
          control={Select}
          options={genderOptions}
          label={{ children: "Genero", htmlFor: "form-select-control-gender" }}
          placeholder="Genero"
          search
          searchInput={{ id: "form-select-control-gender" }}
          value={props.Employee.gender}
          name="gender"
          onChange={(e, { value, name }) => props.handleChange(value, name)}
        />

        <Form.Field
          control={Select}
          options={idOptions}
          label={{
            children: "Tipo de identificacion",
            htmlFor: "form-select-control-identification",
          }}
          placeholder="Tipo de identificacion"
          search
          searchInput={{ id: "form-select-control-Identification" }}
          value={props.Employee.identification_type}
          name="identification_type"
          onChange={(e, { value, name }) => props.handleChange(value, name)}
        />

        <Form.Field>
          <label>Numero de identificacion</label>
          <Input iconPosition="left" fluid>
            <Icon name="pencil" />
            <input
              icon="users"
              control="input"
              name="identification_number"
              value={props.Employee.identification_number}
              onChange={e => props.handleChange(e.target.value, e.target.name)}
            />
          </Input>
        </Form.Field>

        <Button
          positive
          fluid
          onClick={nextHandler}
          disabled={
            !props.Employee.first_name ||
            !props.Employee.last_name ||
            !props.Employee.gender ||
            !props.Employee.identification_type ||
            !props.Employee.identification_number
              ? true
              : false
          }
        >
          Siguiente
        </Button>
      </Segment>
    </Grid.Column>
  );
}

export default withRouter(Step1);
