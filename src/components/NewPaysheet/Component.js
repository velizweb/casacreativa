import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import * as XLXS from "xlsx";
import Paysheet from "../../API/PaySheet";
import Layout from "./Layout";

function NewPaysheet(props) {
  const [company_id] = useState(props.match.params.company_id);
  const [PaySheetParams, setPaySheetParams] = useState({
    tasa: 0,
    FromDate: "",
    UntilDate: "",
    models: "",
  });
  const [Generating, setGenerating] = useState(false);
  const [Generated, setGenerated] = useState(false);
  const [models, setModels] = useState([]);
  const [nameFile, setNameFile] = useState("");
  const inputFileRef = useRef(null);

  function handleChange(value, name) {
    setPaySheetParams({
      ...PaySheetParams,
      [name]: value,
    });
  }

  const handleChangeExcel = (e) => {
    let reader = new FileReader();
    const dataPlataform = [];
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onloadend = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLXS.read(data, { type: "array" });
      workbook.SheetNames.forEach((sheetName) => {
        let XL_row_object = XLXS.utils.sheet_to_json(workbook.Sheets[sheetName], {
          type: "array",
        });
        dataPlataform.push({ platform: sheetName, models: XL_row_object });
      });
      //setModels(dataPlataform);
      setPaySheetParams({
        ...PaySheetParams,
        ["models"]: dataPlataform,
      });
    };
    setNameFile(e.target.files[0].name);
  };

  const disabledButtom = () => {
    return (
      PaySheetParams.tasa <= 0 ||
      PaySheetParams.FromDate === "" ||
      PaySheetParams.UntilDate === "" ||
      PaySheetParams.models === ""
    );
  };

  function handleSubmit() {
    setGenerating(true);
    console.log(PaySheetParams);

    Paysheet.calc(company_id, PaySheetParams)
      .then((response) => {
        console.log(response);
        setGenerated(true);
        setGenerating(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout
      company_id={company_id}
      Generating={Generating}
      Generated={Generated}
      PaySheetParams={PaySheetParams}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputFileRef={inputFileRef}
      nameFile={nameFile}
      handleChangeExcel={handleChangeExcel}
      disabledButtom={disabledButtom}
    />
  );
}

export default withRouter(NewPaysheet);
