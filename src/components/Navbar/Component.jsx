import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Dropdown, Label, Icon } from "semantic-ui-react";
import firebase from "../../firebase";
import Env from "../../Env";

import UserContext from "../../Contexts/UserContext";
import NotificationsDropDown from "../NotificationsDropDown";
import Company from "../../API/Companies";
import logo from "./logo";

function NavBar(props) {
  const user = useContext(UserContext);
  const [Items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [company_id] = useState(props.match.params.company_id);
  const [CompanyInfo, setCompanyInfo] = useState("");

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("notifications").onSnapshot(function(querySnapshot) {
      let result = [];
      querySnapshot.forEach(function(doc) {
        console.log(doc.data());
        result.push(doc.data());
      });

      setItems(result);
    });

    Company.getInfo(company_id)
      .then(response => {
        setCompanyInfo(response.data);
      })
      .catch(error => {
        /* . . . */
      });
  }, []);

  if (user.access_token) {
  }

  const { setUserDetails } = useContext(UserContext);

  function logout() {
    // localStorage.clear()
    setUserDetails({
      name: "",
      access_token: "",
      dateOfBirth: "",
      email: "",
      secretQuestion: "",
      secretAnswer: "",
    });

    localStorage.clear();

    window.location.href = "/";
  }

  function handleItemClick(page) {
    props.history.push(page);
  }

  function displayNotifications() {
    visible === true ? setVisible(false) : setVisible(true);
  }

  function printLogo() {
    if (company_id) {
      return (
        <img
          src={Env.storage_uri(CompanyInfo.primaryLogo)}
          style={{ width: "100px", cursor: "pointer" }}
          onClick={() => handleItemClick("/")}
          alt="..."
        />
      );
    } else {
      return (
        <img
          src={logo}
          style={{ width: "100px", cursor: "pointer" }}
          onClick={() => handleItemClick("/")}
          alt="..."
        />
      );
    }
  }

  return (
    <Menu
      stackable
      inverted
      size="huge"
      style={{ borderRadius: "0px", backgroundColor: "#564aa3" }}
    >
      <Menu.Item>
        {printLogo()}
        {/* <img src={logo} style={{width:'100px',cursor:'pointer'}} onClick={()=>handleItemClick('/')} alt='logo'/>  */}
      </Menu.Item>

      {user.access_token && (
        <Menu.Menu position="right">
          <Dropdown item text="Mi cuenta">
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleItemClick("/account/security/update")}>
                Cambiar clave
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item onClick={() => displayNotifications()}>
            <Label color="red" size={"big"}>
              <Icon name="bell" style={{ color: "white" }} /> {Items.length}
            </Label>

            <NotificationsDropDown visible={visible} data={Items} />
          </Menu.Item>
          <Menu.Item
            name="Salir"
            onClick={() => {
              logout();
            }}
          ></Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
}

export default withRouter(NavBar);
