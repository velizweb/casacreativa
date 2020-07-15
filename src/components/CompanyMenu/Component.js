import React from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function CompanyMenu(props) {
  const company_id = props.match.params.company_id;

  function handleItemClick(page) {
    props.history.push(page);
  }

  return (
    <Menu vertical inverted style={{ marginLeft: "10px" }}>
      <Menu.Item>
        <Menu.Header>Adminsitracion</Menu.Header>
        <Menu.Menu>
          <Menu.Item name="Inicio" onClick={() => handleItemClick("/")} />
          <Menu.Item
            name="Estadisticas"
            onClick={() => handleItemClick("/company/dashboard/" + company_id)}
          />
          <Menu.Item
            name="Empleados"
            onClick={() => handleItemClick("/company/employees/list/" + company_id)}
          />
          <Menu.Item
            name="Modelos"
            onClick={() => handleItemClick("/company/models/" + company_id)}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Nomina</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="Calcular"
            onClick={() => handleItemClick("/company/paysheet/create/" + company_id)}
          />
          <Menu.Item
            name="Gestionar"
            onClick={() => handleItemClick("/company/paysheet/management/latest/" + company_id)}
          />
          <Menu.Item
            name="Historico"
            onClick={() => handleItemClick("/company/paysheet/history/" + company_id)}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Solicitudes</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="Empleados"
            onClick={() => handleItemClick("/company/employees/requests/" + company_id)}
          />

          <Menu.Item
            name="Aperturas de cuenta"
            onClick={() => handleItemClick("/company/account/requests/" + company_id)}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Cargos de facturacion</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="Solicitudes"
            onClick={() => handleItemClick("/company/setup/employees-requests/" + company_id)}
          />

          <Menu.Item
            name="Multas"
            onClick={() => handleItemClick("/company/setup/employees-penalties/" + company_id)}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Inventario</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="Inventario de productos"
            onClick={() => handleItemClick("/company-products/" + company_id)}
          />
          <Menu.Item
            name="Inventario de cuartos"
            onClick={() => handleItemClick("/company/inventary/list/" + company_id)}
          />

          <Menu.Item
            name="Rooms"
            onClick={() => handleItemClick("/company/rooms/list/" + company_id)}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Capacitacion</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="Capacitacion"
            onClick={() => handleItemClick("/company/learning/" + company_id)}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Estudio</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="Plataformas"
            onClick={() => handleItemClick("/company/platforms/" + company_id)}
          />

          <Menu.Item
            name="Branding"
            onClick={() => handleItemClick("/company/info/setup/" + company_id)}
          />
          <Menu.Item
            name="Cargar excel Empleados"
            onClick={() => handleItemClick("/company/loadExcel/" + company_id)}
          />
          <Menu.Item
            name="Cargar excel Modelos"
            onClick={() => handleItemClick("/company/employee/create/models/" + company_id)}
          />
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(CompanyMenu);
