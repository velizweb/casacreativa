import React, { useState, useContext, useEffect } from "react";
import { Grid, Button, Segment } from "semantic-ui-react";
import UserContext from "../Contexts/UserContext";
import UserRolsContext from "../Contexts/UserRolsContext";
import LoaderPage from "./LoaderPage";
import NoItems from "../components/NoItems/Component";
import { withRouter } from "react-router-dom";
import CompanyUserValidator from "../API/CompanyUserValidator";

function RequestRolsPage(props) {
  const user = useContext(UserContext);
  const { setUserRols } = useContext(UserRolsContext);
  const UserRolsDetail = useContext(UserRolsContext);
  const [company_id] = useState(props.match.params.company_id);
  const [Loading, setLoading] = useState(true);

  function use_rol(page) {
    props.history.push(`${page}/${company_id}`);
  }

  /* SOLICITAR PERMISOS */
  useEffect(() => {
    console.log(user);
    CompanyUserValidator.get_user_rols(company_id, user.id)
      .then((response) => {
        console.log("rol: ", response.data);
        setUserRols(response.data);
        setLoading(false);
      })
      .catch((error) => {
        /* . . .*/
        console.log(error);
      });
  }, [company_id, user.id, setUserRols]);

  if (!user.access_token) {
    return <LoaderPage />;
  }

  if (
    user.access_token &&
    parseInt(user.user_type) === 1 &&
    UserRolsDetail.UserRolsDetail.length === 1
  ) {
    console.log("Redirecting super admin");
    props.history.push(`/company/dashboard/${company_id}`);
  }

  const MessageTemplate = (props) => (
    <Grid verticalAlign="middle" columns={4} centered>
      <Grid.Row style={{ height: "80vh" }}>
        <Grid.Column>
          <NoItems title={props.text} firstButtonText={false} firstPage={false} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  if (Loading) {
    return <MessageTemplate text={"Solicitando permisos, por favor espera un momento ..."} />;
  }

  if (Loading === false && UserRolsDetail.UserRolsDetail.length === 0) {
    return <MessageTemplate text={"No tienes persmisos para ver esta pagina..."} />;
  }

  if (Loading === false && UserRolsDetail.UserRolsDetail.length === 1) {
    switch (UserRolsDetail.UserRolsDetail[0].user_type) {
      case "Admin":
        setTimeout(() => {
          props.history.push(`/company/dashboard/${company_id}`);
        }, 2000);
        break;
      case "Monitor":
        setTimeout(() => {
          props.history.push(`/company/dashboard/${company_id}`);
        }, 2000);
        break;
      case "Model":
        setTimeout(() => {
          props.history.push(`/model/dashboard/${company_id}`);
        }, 2000);
        break;

      default:
        break;
    }
    return "Iniciando...";
  }

  if (Loading === false && UserRolsDetail.UserRolsDetail.length > 1) {
    return (
      <Grid verticalAlign="middle" columns={4} centered>
        <Grid.Row style={{ height: "80vh" }}>
          <Grid.Column>
            <Segment>
              <h3>Selecciona un rol para ingresar al estudio</h3>
              <p>Debes seleccionar un rol ya que tienes multiples roles asignados</p>
              {UserRolsDetail.UserRolsDetail.map((item, key) => {
                if (item.user_type === "Admin") {
                  return (
                    <Button positive onClick={() => use_rol("/company/dashboard")} key={key}>
                      Admin
                    </Button>
                  );
                }
                if (item.user_type === "Monitor") {
                  return (
                    <Button positive onClick={() => use_rol("/company/dashboard")} key={key}>
                      Monitor
                    </Button>
                  );
                }

                if (item.user_type === "Model") {
                  return (
                    <Button positive onClick={() => use_rol("/model/dashboard")} key={key}>
                      Modelo
                    </Button>
                  );
                }

                return false;
              })}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(RequestRolsPage);
