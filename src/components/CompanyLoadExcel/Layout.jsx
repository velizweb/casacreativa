import React from "react";
import { Button, Segment, Divider, Tab, Message, Form, Icon, Grid, Input } from "semantic-ui-react";

import "react-datepicker/dist/react-datepicker.css";

const Layout = ({ handleChangeExcel, handleSubmit, inputFileRef, loaded, loading, setTasa, nameFile, tasa }) => {
  const panes = [
    {
      menuItem: "Importar Excel",
      render: () => (
        <Tab.Pane attached={false}>
          {loading && (
            <Message color="blue" icon>
              <Icon name="circle notched" loading />
              <Message.Content
                style={{
                  marginLeft: "20px",
                }}
              >
                <Message.Header>Espere unos segundos</Message.Header>
                Subiendo archivos, por favor no cierre esta pagina hasta completar el proceso.
              </Message.Content>
            </Message>
          )}

          {loaded && <Message success header={"La información del achivo fue cargada correctamente."} />}
          <Form>
            <Grid>
              <Grid.Column width={6} style={{ marginTop: "1em" }}>
                <label>Tasa de combertivilidad USD / COP</label>
                <Input style={{ marginBottom: "1em" }} fluid control="input" placeholder="0.00" name="tasa" onChange={(e) => setTasa(e.target.value)} />
              </Grid.Column>
              <Grid.Column width={16}>
                <Divider />
                {nameFile && <label>Archivo seleccionado: {nameFile}</label>}
                <Form.Field>
                  <Button content="Seleccione el archivo" labelPosition="left" icon="file" onClick={() => inputFileRef.current.click()} />
                  <input ref={inputFileRef} name="excel" type="file" hidden onChange={handleChangeExcel} />
                </Form.Field>
                <Button type="submit" positive onClick={handleSubmit} disabled={nameFile && tasa > 0 ? false : true}>
                  Cargar información
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Segment style={{ padding: "5em 1em" }} vertical>
      <Divider horizontal>CARGA DE EXCEL NOMINA</Divider>
      <Tab menu={{ pointing: true }} panes={panes} />
    </Segment>
  );
};

export default Layout;
