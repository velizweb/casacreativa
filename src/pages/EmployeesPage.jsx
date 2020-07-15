import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import NavBar from "../components/Navbar/Component";
import CompanyMenu from "../components/CompanyMenu/Component";
import Employees from "../components/Employees/Component";
import EmployeesCreate from "../components/EmployeesCreate/Component";
import EmployeesUpdate from "../components/EmployeesUpdate/Component";
import EmployeeDetail from "../components/EmployeeDetail/Component";
import EmployeeModelsExcelCreate from "../components/EmployeeModelsExcelCreate/Component";
import UserContext from "../Contexts/UserContext";
import LoaderPage from "./LoaderPage";

import UserRolsContext from "../Contexts/UserRolsContext";
import RequestRolsPage from "./RequestRolsPage";

function CompanyEployeesPage(props) {
  const { match } = props;
  const user = useContext(UserContext);
  const UserRolsDetail = useContext(UserRolsContext);

  if (!user.access_token) {
    return <LoaderPage />;
  }
  if (!UserRolsDetail.UserRolsDetail.length) {
    return <RequestRolsPage />;
  }

  if (props.PageAccess(props.accesibleBy, UserRolsDetail.UserRolsDetail)) {
    return (
      <div>
        <NavBar />
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={3}>
              <CompanyMenu />
            </Grid.Column>
            <Grid.Column width={13}>
              {props.list && <Employees />}
              {props.create && <EmployeesCreate />}
              {props.update && <EmployeesUpdate />}
              {props.detail && <EmployeeDetail />}
              {props.modelsCreate && (
                <EmployeeModelsExcelCreate company={match.params.company_id} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(CompanyEployeesPage);
