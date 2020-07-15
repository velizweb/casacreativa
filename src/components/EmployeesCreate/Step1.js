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
    { key: "3", text: "Pasaporte", value: "Passport" },
    { key: "4", text: "PEP", value: "PEP" },
  ];

  const chargeOptions = [
    { key: "1", text: "Otro", value: "Other" },
    { key: "2", text: "Monitor", value: "Monitor" },
    { key: "3", text: "Admin", value: "Admin" },
  ];

  const bankOptions = [
    { key: "1", text: "BANCO DE BOGOTA", value: "1001" },
    { key: "2", text: "BANCO POPULAR", value: "1002" },
    { key: "3", text: "BANCO SANTANDER", value: "1006" },
    { key: "4", text: "SCOTIABANK", value: "1008" },
    { key: "5", text: "CITIBANK", value: "1009" },
    { key: "6", text: "HSBC", value: "1010" },
    { key: "7", text: "BANCO SUDAMERIS", value: "1012" },
    { key: "8", text: "BBVA", value: "1013" },
    { key: "9", text: "HELM BANK S.A", value: "1014" },
    { key: "10", text: "BANCO COLPATRIA", value: "1019" },
    { key: "11", text: "BANCO DE OCCIDENTE", value: "1023" },
    { key: "12", text: "BANCO CAJA SOCIAL BCSC", value: "1032" },
    { key: "13", text: "BANCO DAVIVIENDA", value: "1051" },
    { key: "14", text: "BANCO AV VILLAS ", value: "1052" },
    { key: "15", text: "BANCO AGRARIO", value: "1040" },
    { key: "16", text: "CONFIAR", value: "1292" },
    { key: "17", text: "BANCO PROCREDIT COLOMBIA", value: "1058" },
    { key: "18", text: "COOPERATIVA FINANCIERA DE ANTIOQUIA", value: "1283" },
    { key: "19", text: "FINANCIERA JURISCOOP", value: "1296" },
    { key: "20", text: "COOPCENTRAL S.A", value: "1076" },
    { key: "21", text: "BANCOOMEVA", value: "1061" },
    { key: "22", text: "BANCO PICHINCHA", value: "1060" },
    { key: "23", text: "COTRAFA COOPERATIVA FINANCIERA", value: "1289" },
    { key: "24", text: "BANCO FALABELLA S.A", value: "1062" },
    { key: "25", text: "BANCO FINANDINA", value: "1063" },
  ];

  function nextHandler() {
    props.incremetStepHeader();
    props.nextStep();
  }

  return (
    <Grid.Column>
      <Segment>
        <Form.Field>
          {!props.Employee.model && (
            <Form.Field
              control={Select}
              options={chargeOptions}
              label={{ children: "Selecciona un cargo", htmlFor: "form-select-control-charge" }}
              placeholder="Cargo"
              search
              searchInput={{ id: "form-select-control-charge" }}
              value={props.Employee.charge_type}
              name="charge_type"
              onChange={(e, { value, name }) => props.handleChange(value, name)}
            />
          )}

          <label>Nombres</label>
          <Input iconPosition="left" fluid>
            <Icon name="pencil" />
            <input
              icon="users"
              control="input"
              name="first_name"
              value={props.Employee.first_name}
              onChange={(e) => props.handleChange(e.target.value, e.target.name)}
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
              onChange={(e) => props.handleChange(e.target.value, e.target.name)}
            />
          </Input>
        </Form.Field>

        <Form.Field
          control={Select}
          options={genderOptions}
          label={{ children: "Genero", htmlFor: "form-select-control-gender" }}
          placeholder="Seleccione un genero"
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
          placeholder="Seleccione un tipo"
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
              onChange={(e) => props.handleChange(e.target.value, e.target.name)}
            />
          </Input>
        </Form.Field>

        <Form.Field
          control={Select}
          options={bankOptions}
          label={{
            children: "Banco",
            htmlFor: "form-select-control-identification",
          }}
          placeholder="Seleccione un banco"
          search
          searchInput={{ id: "form-select-control-Identification" }}
          value={props.Employee.bank_code}
          name="bank_code"
          onChange={(e, { value, name }) => props.handleChange(value, name)}
        />

        <Form.Field>
          <label>Numero de cuenta</label>
          <Input iconPosition="left" fluid>
            <Icon name="pencil" />
            <input
              icon="dollar sign"
              control="input"
              name="account_number"
              value={props.Employee.account_number}
              onChange={(e) => props.handleChange(e.target.value, e.target.name)}
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
