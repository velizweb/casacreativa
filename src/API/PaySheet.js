import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id) => axios.get(Env.api_uri("paysheet/history/" + company_id)),

    user_penalties: (company_id, user_id, paysheet_id) => axios.get(Env.api_uri(`paysheet/detail/user_penalties/${company_id}/${user_id}/${paysheet_id}`)),
    shopping_records_detail: (company_id, user_id, paysheet_id) => axios.get(Env.api_uri(`paysheet/detail/shopping_records/${company_id}/${user_id}/${paysheet_id}`)),
    user_requests_detail: (company_id, user_id, paysheet_id) => axios.get(Env.api_uri(`paysheet/detail/user_requests/${company_id}/${user_id}/${paysheet_id}`)),

    mark: (company_id, item_id) => axios.get(Env.api_uri(`paysheet/mark/${company_id}/${item_id}`)),
    management: (company_id, paysheet_code = "") => axios.get(Env.api_uri(paysheet_code !== "" ? `paysheet/management/${company_id}/${paysheet_code}` : `paysheet/management/${company_id}`)),
    totals: (company_id, paysheet_code, paysheet_id) => axios.get(Env.api_uri(`paysheet/totals/${company_id}/${paysheet_code}/${paysheet_id}`)),
    getLastDateTime: (company_id) => axios.get(Env.api_uri("getLastDateTime/" + company_id)),
    find: (company_id, paysheet_id) => axios.get(Env.api_uri("paysheet/" + company_id + "/" + paysheet_id)),
    calc: (company_id, data) => axios.post(Env.api_uri("paysheet/calc/" + company_id), data),
    calcExcel: (company_id, data) => axios.post(Env.api_uri("paysheet/loadExcel/" + company_id), data),

    recalculate: (company_id, user_id, paysheet_id, data) => axios.post(Env.api_uri(`paysheet/recalculate/${company_id}/${user_id}/${paysheet_id}`), data),

    paid: (company_id, user_id, paysheet_id, data) => axios.post(Env.api_uri(`paysheet/paid/${company_id}/${user_id}/${paysheet_id}`), data),
};