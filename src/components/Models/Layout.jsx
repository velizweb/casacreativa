import React from "react";
import { withRouter } from "react-router-dom";

import { Item, Grid, Segment, Header, Image, Button, Tab, Menu } from "semantic-ui-react";
import ModelSetup from "../ModelSetup/Component";
import ModelPenalties from "../ModelPenalties/Component";
import ModelAccounts from "../ModelAccounts/Component";
import ModelActiveShoppingRecords from "../ModelActiveShoppingRecords/Component";
import ModelRequests from "../ModelRequests/Component";
import FilerInput from "../FilerInput/Component";
import EmployeeContractInfo from "../EmployeeContractInfo/Layout";
import Env from "../../Env";
import GuiHeader from "../../gui/GuiHeader";

function Layout(props) {
  function handleItemClick(page) {
    props.history.push(page);
  }

  const panes = [
    {
      menuItem: <Menu.Item key="personalInfo">Información</Menu.Item>,
      render: () => (
        <Tab.Pane>
          <div className="p-3">
            <EmployeeContractInfo
              Employee={props.Employee}
              PersonalInfo={true}
              ContactInfo={true}
              Documents={true}
            />
          </div>
        </Tab.Pane>
      ),
    },
    {
      // Active E-commerce charges
      menuItem: <Menu.Item key="compras">Compras</Menu.Item>,
      render: () => (
        <Tab.Pane>
          <ModelActiveShoppingRecords user_id={props.Employee.id} />
        </Tab.Pane>
      ),
    },
    {
      // Active penalties charges
      menuItem: <Menu.Item key="multas">Multas</Menu.Item>,
      render: () => (
        <Tab.Pane>
          <ModelPenalties user_id={props.Employee.id} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: <Menu.Item key="solicitudes">Solicitudes</Menu.Item>,
      render: () => (
        <Tab.Pane>
          <ModelRequests user_id={props.Employee.id} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: <Menu.Item key="ModelAccounts">Cuentas</Menu.Item>,
      render: () => (
        <Tab.Pane>
          <ModelAccounts user_id={props.Employee.id} company_id={props.match.params.company_id} />
        </Tab.Pane>
      ),
    },
    {
      // Contract info setup
      menuItem: <Menu.Item key="modelSetup">Configuracion</Menu.Item>,
      render: () => (
        <Tab.Pane>
          <ModelSetup user_id={props.Employee.id} />
        </Tab.Pane>
      ),
    },
  ];

  const TabExampleCustomMenuItem = () => <Tab panes={panes} />;

  return (
    <Grid columns="equal">
      <Grid.Column width={5}>
        <Segment>
          <FilerInput Filter={props.Filter} handleChange={props.handleChange} />

          <Item.Group divided>
            {props.data.map((item, key) => {
              return (
                <Item key={key}>
                  <Item.Image size="tiny" src={Env.storage_uri(item.avatar_image)} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header as="a" onClick={() => props.setEmployee(item)}>
                      {item.first_name} {item.last_name}
                    </Item.Header>
                  </Item.Content>
                </Item>
              );
            })}
          </Item.Group>
        </Segment>
      </Grid.Column>
      <Grid.Column width={11}>
        <Segment>
          {!props.Employee.id ? (
            <div>
              <GuiHeader
                button_text={"Nueva Modelo"}
                header_text={"Administracion de modelos"}
                header_sub_text={"Por favor selecciona una modelo para desplegar opciones"}
                page={"/company/employees/create/" + props.match.params.company_id + "/1"}
              />

              <Image src="https://thumbs.gfycat.com/WhoppingTimelyAnemoneshrimp-size_restricted.gif" />
            </div>
          ) : (
            ""
          )}

          {props.Employee.id ? (
            <Header as="h2">
              <Image circular src={Env.storage_uri(props.Employee.avatar_image)} />{" "}
              {props.Employee.full_name}
              <Button
                negative
                onClick={() => props.setDefaultState()}
                className="ml-5"
                size="small"
              >
                Cancelar
              </Button>
              <Button
                positive
                onClick={() =>
                  handleItemClick(
                    "/company/account/requests/create/" +
                      props.match.params.company_id +
                      "/" +
                      props.Employee.id,
                  )
                }
                size="small"
              >
                Solicitar cuenta
              </Button>
            </Header>
          ) : (
            ""
          )}

          {props.Employee.id && <TabExampleCustomMenuItem />}
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default withRouter(Layout);
