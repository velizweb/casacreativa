import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import UserContext from "../../Contexts/UserContext";
import axios from "axios";
import API from "../../API/Auth";
import Gui from "./Gui";
import { withRouter } from "react-router-dom";

const redirectTo = "/";

function Login(props) {
  const user = useContext(UserContext);
  const [loading, set_Loading] = useState(false);

  const [inputsLogin, setInputsLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(value, name) {
    setInputsLogin({
      ...inputsLogin,
      [name]: value,
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    set_Loading(true);

    API.login({
      ...inputsLogin,
    })
      .then((response) => {
        // localStorage.setItem('user', JSON.stringify(response.data));
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access_token;

        localStorage.setItem("user", JSON.stringify(response.data));

        set_Loading(false);
      })
      .catch((error) => {
        set_Loading(false);
      });
  }

  function onRecoverPassword() {
    props.history.push("/company/user/recoverPassword");
  }

  if (user.access_token && props.redirect) {
    return <Redirect to={redirectTo} />;
  }

  if (props.fromWizard) {
    if (user.access_token && !props.redirect) {
      props.nextStep();
    }
  }

  return (
    <div>
      <Gui
        params={{ ...inputsLogin }}
        onSubmitHandler={onSubmitHandler}
        handleChange={handleChange}
        loading={loading}
        onRecoverPassword={onRecoverPassword}
      />
    </div>
  );
}

export default withRouter(Login);
