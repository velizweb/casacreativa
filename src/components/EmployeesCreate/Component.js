import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import EMPLOYEES from "../../API/Employees";
import Layout from "./Layout";

function EmployeesCreate(props) {
  const { match } = props;
  const { params } = match;
  const { model } = params;
  const { addToast } = useToasts();

  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [Creating, setCreating] = useState(false);
  const [isModel, setIsModel] = useState(false);

  const [Employee, setEmployee] = useState({
    rol: "",
    first_name: "",
    last_name: "",
    gender: "",
    identification_type: "",
    identification_number: "",
    housing_address: "",
    primary_phone: "",
    secondary_phone: "",
    email: "",
    charge_type: props.match.params.model ? "Model" : "",
    model: props.match.params.model ? 1 : 0,
    company_id: props.match.params.company_id,
    bank_code: "",
    account_number: "",
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

  function handleSubmit() {
    const formData = new FormData();
    formData.append("company_id", props.match.params.company_id);

    formData.append("front_id_card", FrondIdCard[0].file);
    formData.append("reverse_id_card", ReverseIdCard[0].file);

    if (OnHandIdCard.length) formData.append("on_hand_id_card", OnHandIdCard[0].file);
    if (FrontReverseIdCard.length)
      formData.append("front_reverse_id_card", FrontReverseIdCard[0].file);
    if (AvatarImage.length) formData.append("avatar_image", AvatarImage[0].file);

    formData.append("rol", Employee.charge_type);
    formData.append("first_name", Employee.first_name);
    formData.append("last_name", Employee.last_name);
    formData.append("gender", Employee.gender);
    formData.append("identification_type", Employee.identification_type);
    formData.append("identification_number", Employee.identification_number);

    formData.append("housing_address", Employee.housing_address);
    formData.append("primary_phone", Employee.primary_phone);
    formData.append("secondary_phone", Employee.secondary_phone);
    formData.append("email", Employee.email);
    formData.append("bank_code", Employee.bank_code);
    formData.append("account_number", Employee.account_number);

    setCreating(true);

    EMPLOYEES.create(props.match.params.company_id, formData)
      .then((response) => {
        addToast("The employee  was created successfully", {
          appearance: "success",
          autoDismiss: true,
          pauseOnHover: false,
        });

        setLoading(false);
        setCreated(true);
        setCreating(false);
      })
      .catch((error) => {
        console.log(error.response);
        addToast(error.response, {
          autoDismiss: true,
          appearance: "error",
          pauseOnHover: false,
        });

        setLoading(false);
      });
  }

  useEffect(() => {
    if (Employee.model) setIsModel(true);
  }, [Employee]);

  return (
    <Layout
      loading={loading}
      created={created}
      Creating={Creating}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Employee={Employee}
      setEmployee={setEmployee}
      // Files props
      isModel={isModel}
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

export default withRouter(EmployeesCreate);
