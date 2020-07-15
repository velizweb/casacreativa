import React, { useState, useRef, useEffect } from "react";
import * as XLXS from "xlsx";
import Layout from "./Layout";
import EMPLOYEES from "../../API/Employees";

const EmployeeModelsExcelCreate = ({ company }) => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [models, setModels] = useState({});
  const [nameFile, setNameFile] = useState("");
  const inputFileRef = useRef(null);

  const handleChangeExcel = (e) => {
    let reader = new FileReader();
    //const dataPlataform = [];
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onloadend = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLXS.read(data, { type: "array" });
      workbook.SheetNames.forEach((sheetName) => {
        if (sheetName === "models") {
          let XL_row_object = XLXS.utils.sheet_to_json(workbook.Sheets["models"], {
            type: "array",
          });
          //dataPlataform.push({ models: XL_row_object });
          setModels(XL_row_object);
        }
      });
    };
    setNameFile(e.target.files[0].name);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await EMPLOYEES.create_employee_models(company, {
        models,
      });

      setLoading(false);
      setLoaded(true);
      setNameFile("");
    } catch (error) {
      console.log("Ha ocurrido un error en la carga del archivo.");
    }
  };

  return (
    <Layout
      handleSubmit={handleSubmit}
      handleChangeExcel={handleChangeExcel}
      loading={loading}
      loaded={loaded}
      inputFileRef={inputFileRef}
      nameFile={nameFile}
    />
  );
};

export default EmployeeModelsExcelCreate;
