import React from "react";
import { List, Divider } from "semantic-ui-react";

function PersonalInfo(props) {
  if (!props.Employee) {
    return "";
  }

  const validate_keys = [
    {
      key: "first_name",
      label: "Nombres",
    },
    {
      key: "last_name",
      label: "Apellidos",
    },
    {
      key: "gender",
      label: "Genero",
    },
    {
      key: "identification_type",
      label: "Tipo de identificacion",
    },
    {
      key: "identification_number",
      label: "Numero de identificacion",
    },
  ];

  return (
    <div>
      <h3 className="text-dark">Informacion personal</h3>
      <List>
        {validate_keys.map((item, key) => {
          if (props.Employee[item.key]) {
            return (
              <List.Item key={key}>
                <span>{item.label} : </span>
                <br />
                <span style={{ fontSize: ".9em" }}> {props.Employee[item.key]}</span>
                <Divider />
              </List.Item>
            );
          } // endif

          return true;
        })}
      </List>
    </div>
  );
}

export default PersonalInfo;
