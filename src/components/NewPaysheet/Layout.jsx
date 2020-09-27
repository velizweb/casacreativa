import React from "react";
import { withRouter } from "react-router-dom";
import { Segment, Form, Dimmer, Button, Loader, Grid, Divider, Input } from "semantic-ui-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Layout(props) {
  const company_id = props.match.params.company_id;

  if (props.Getting) {
    return <Loader active inline="centered" />;
  }

  function goTo(page) {
    props.history.push(page);
  }

  if (props.Generating) {
    return (
      <Grid columns="equal">
        <Grid.Column width={16}>
          <Segment>
            <center>
              <h1 style={{ color: "black" }}>Generar nomina</h1>

              <Dimmer active inverted>
                <Loader active inline="centered" />
              </Dimmer>

              <p>Generando nomina, espere un momento por favor</p>
            </center>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }

  if (props.Generated) {
    return (
      <Grid columns="equal">
        <Grid.Column width={16}>
          <Segment>
            <center>
              <h1 style={{ color: "black" }}>Generar nomina</h1>
              <p style={{ fontSize: "2em" }}>Nomina generada con exito</p>
              <Button
                type="button"
                size="massive"
                positive
                onClick={() => goTo(`/company/paysheet/management/latest/${company_id}`)}
              >
                Gestionar
              </Button>
            </center>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }

  if (props.Generated === false && props.Generating === false) {
    return (
      <Form>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <h3 style={{ color: "black" }}>Generar nomina</h3>
              <p>Calcula la nomina de las modelos activas</p>
              {/* {JSON.stringify(props.PaySheetParams)} */}
              <Divider />
            </Grid.Column>

            <Grid.Column width={6}>
              <label>Desde</label>
              <br />
              <DatePicker
                selected={props.PaySheetParams.FromDate}
                onChange={(date) => props.handleChange(date, "FromDate")}
                dateFormat="Y-M-d"
              />
            </Grid.Column>

            <Grid.Column width={6}>
              <label>Hasta</label>
              <br />
              <DatePicker
                selected={props.PaySheetParams.UntilDate}
                onChange={(date) => props.handleChange(date, "UntilDate")}
                dateFormat="Y-M-d"
              />
            </Grid.Column>

            <Grid.Column width={6} style={{ marginTop: "1em" }}>
              <label>Tasa de combertivilidad USD / COP</label>
              <Input
                style={{ marginBottom: "1em" }}
                fluid
                control="input"
                placeholder="0.00"
                name="tasa"
                value={props.PaySheetParams.tasa}
                onChange={(e) => props.handleChange(e.target.value, e.target.name)}
              />
            </Grid.Column>
            <Grid.Column width={6} style={{ marginTop: "1em" }}>
              <label>Seleccione archivo de plataformas sin token</label>
              {props.nameFile && <label>Archivo seleccionado: {props.nameFile}</label>}
              <Form.Field>
                <Button
                  content="Seleccione el archivo"
                  labelPosition="left"
                  icon="file"
                  onClick={() => props.inputFileRef.current.click()}
                />
                <input
                  ref={props.inputFileRef}
                  name="excel"
                  type="file"
                  hidden
                  onChange={props.handleChangeExcel}
                />
              </Form.Field>
            </Grid.Column>

            <Grid.Column width={16}>
              <Divider />
              <Button
                type="submit"
                disabled={props.disabledButtom()}
                positive
                onClick={() => props.handleSubmit()}
              >
                Calcular nomina
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default withRouter(Layout);
