import React, { useState, useRef, useEffect } from "react";
import * as XLXS from "xlsx";
import Layout from "./Layout";
import Paysheet from "../../API/PaySheet";

const CompanyLoadExcel = ({ company }) => {
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [models, setModels] = useState([]);
    const [tasa, setTasa] = useState(null);
    const [nameFile, setNameFile] = useState("");
    const inputFileRef = useRef(null);

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
            setModels(dataPlataform);
        };
        setNameFile(e.target.files[0].name);
    };

    const handleSubmit = async() => {
        setLoading(true);
        try {
            await Paysheet.calcExcel(company, {
                tasa,
                models,
            });

            setLoading(false);
            setLoaded(true);
            setTasa(null);
            setNameFile("");
        } catch (error) {
            console.log("Ha ocurrido un error en la carga del archivo.");
        }
    };

    return <Layout handleSubmit = { handleSubmit }
    handleChangeExcel = { handleChangeExcel }
    setTasa = { setTasa }
    loading = { loading }
    loaded = { loaded }
    inputFileRef = { inputFileRef }
    nameFile = { nameFile }
    tasa = { tasa }
    />;
};

export default CompanyLoadExcel;