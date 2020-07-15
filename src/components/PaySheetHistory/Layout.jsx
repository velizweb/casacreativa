import React from "react";
import { withRouter } from "react-router-dom";
import { Table, Icon, Label, Button, Loader, Grid } from "semantic-ui-react";
import GuiHeader from "../../gui/GuiHeader";

function Layout(props) {
  function gotTo(company_id, paysheet_code) {
    props.history.push(`/company/paysheet/management/load/${company_id}/${paysheet_code} `);
  }

  if (props.loading) {
    return <Loader active inline="centered" />;
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <GuiHeader button_text={"Calcular nueva nomina"} header_text={"Historico de nomina"} header_sub_text={"Loren ipsun dolor site amet"} page={"/generate/paysheet/" + props.company_id} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Codigo</Table.HeaderCell>
                <Table.HeaderCell>Fecha inicio</Table.HeaderCell>
                <Table.HeaderCell>Fecha cierre</Table.HeaderCell>
                <Table.HeaderCell>Option</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {props.PaySheetHistoryData.map((item, key) => {
                return (
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon color="green">
                        {item.paysheet_code}
                      </Label>
                    </Table.Cell>
                    <Table.Cell>{item.created_at}</Table.Cell>
                    <Table.Cell>{item.created_at}</Table.Cell>
                    <Table.Cell>
                      <Button animated size="small" positive onClick={() => gotTo(props.company_id, item.paysheet_code)}>
                        <Button.Content visible>Abrir</Button.Content>
                        <Button.Content hidden>
                          <Icon name="folder open" />
                        </Button.Content>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default withRouter(Layout);
