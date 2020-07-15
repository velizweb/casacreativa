import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PaySheet from "../../API/PaySheet";
import Layout from "./Layout";

function PaySheetHistory(props) {
    const [PaySheetHistoryData, setPaySheetHistoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const company_id = props.match.params.company_id;

    useEffect(() => {
        PaySheet.list(company_id)
            .then((response) => {
                setPaySheetHistoryData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    }, [company_id]);

    return <Layout PaySheetHistoryData = { PaySheetHistoryData }
    loading = { loading }
    company_id = { company_id }
    />;
}

export default withRouter(PaySheetHistory);