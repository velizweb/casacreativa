import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import EMPLOYEES from "../../API/Employees";
import Layout from "./Layout";

function EmployeesUpdate(props) {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);

  const [user_id] = useState(props.match.params.user_id);
  const [company_id] = useState(props.match.params.company_id);
  const [Employee, setEmployee] = useState({
    company_id: company_id,
  });

  const [FrondIdCard, setFrontIdCard] = useState([]);
  const [ReverseIdCard, setReverseIdCard] = useState([]);
  const [OnHandIdCard, setOnHandIdCard] = useState([]);
  const [FrontReverseIdCard, setFrontReverseIdCard] = useState([]);
  const [AvatarImage, setAvatarImage] = useState([]);
  const [OtherDocuments, setOtherDocuments] = useState([]);

  function handleChange(value, name) {
    setEmployee({
      ...Employee,
      [name]: value,
    });
  }

  useEffect(() => {
    setLoading(true);

    EMPLOYEES.find(company_id, user_id)
      .then((response) => {
        setEmployee(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        // . . .
        setLoading(false);
      });
  }, [company_id, user_id]);

  function handleSubmit() {
    const formData = new FormData();

    if (FrondIdCard[0]) {
      formData.append("front_id_card", FrondIdCard[0].file);
    }

    if (ReverseIdCard[0]) {
      formData.append("reverse_id_card", ReverseIdCard[0].file);
    }

    if (OnHandIdCard[0]) {
      formData.append("on_hand_id_card", OnHandIdCard[0].file);
    }

    if (FrontReverseIdCard[0]) {
      formData.append("front_reverse_id_card", FrontReverseIdCard[0].file);
    }

    if (AvatarImage[0]) {
      formData.append("avatar_image", AvatarImage[0].file);
    }

    formData.append("company_id", props.match.params.company_id);
    formData.append("id", Employee.id);
    formData.append("first_name", Employee.first_name);
    formData.append("last_name", Employee.last_name);
    formData.append("gender", Employee.gender);
    formData.append("identification_type", Employee.identification_type);
    formData.append("identification_number", Employee.identification_number);

    formData.append("housing_address", Employee.housing_address);
    formData.append("primary_phone", Employee.primary_phone);
    formData.append("secondary_phone", Employee.secondary_phone);
    formData.append("email", Employee.email);

    EMPLOYEES.update_employee(props.match.params.company_id, formData)
      .then((response) => {
        setLoading(false);
        setCreated(true);

        addToast("El empleado fue actualizado satisfactoriamente", {
          appearance: "success",
          autoDismiss: true,
          pauseOnHover: false,
        });
      })
      .catch((error) => {
        console.log(error.response.data.error);
        addToast(error.response.data.error, {
          autoDismiss: true,
          appearance: "error",
          pauseOnHover: false,
        });

        setLoading(false);
      });
  }

  return (
    <Layout
      loading={loading}
      created={created}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Employee={Employee}
      setEmployee={setEmployee}
      // Files props

      FrondIdCard={FrondIdCard}
      setFrontIdCard={setFrontIdCard}
      ReverseIdCard={ReverseIdCard}
      setReverseIdCard={setReverseIdCard}
      OnHandIdCard={OnHandIdCard}
      setOnHandIdCard={setOnHandIdCard}
      FrontReverseIdCard={FrontReverseIdCard}
      setFrontReverseIdCard={setFrontReverseIdCard}
      AvatarImage={AvatarImage}
      setAvatarImage={setAvatarImage}
      OtherDocuments={OtherDocuments}
      setOtherDocuments={setOtherDocuments}
    />
  );
}

export default withRouter(EmployeesUpdate);
