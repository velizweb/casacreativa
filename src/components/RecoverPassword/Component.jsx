import React, { useState, useRef } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import API from "../../API/Employees";
import Gui from "./Gui";
import { withRouter } from "react-router-dom";

const RecoverPassword = (props) => {
  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  const notificationDOMRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (count === 0) {
      let existUser = await API.validate_user(email);

      if (existUser.data.exist) {
        setCount(1);
        setExist(true);
        setLoading(false);
        addNotification({
          message: "El usuario existe en nuestra plataforma.",
          type: "success",
        });
      } else {
        setCount(0);
        setExist(false);
        setLoading(false);
        addNotification({
          message: "El usuario no existe en nuestra plataforma.",
          type: "danger",
        });
      }
    } else {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      let updatePassword = await API.update_password(formData);

      if (updatePassword.data.update) {
        addNotification({
          message: "La contraseña del usuario ha sido actualizada..",
          type: "success",
        });
        /*setTimeout(() => {
          props.history.push("/login");
        }, 3000);*/
        setInterval(() => {
          props.history.push("/login");
        }, 3000);
      } else {
        addNotification({
          message: "La contraseña del usuario no ha sido actualizada..",
          type: "danger",
        });
        setLoading(false);
      }
    }
  };

  const addNotification = (data) => {
    notificationDOMRef.current.addNotification({
      title: "Recuperación de Contraseña",
      message: data.message,
      type: data.type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true },
    });
  };

  const onBack = () => {
    props.history.push("/");
  };

  return (
    <div>
      <ReactNotification ref={notificationDOMRef} />
      <Gui
        onSubmitHandler={onSubmitHandler}
        loading={loading}
        exist={exist}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        setExist={setExist}
        onBack={onBack}
      />
    </div>
  );
};

export default withRouter(RecoverPassword);
