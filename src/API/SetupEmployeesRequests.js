import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id) => axios.get(Env.api_uri("company/setup/employees/requests/" + company_id)),

    create: (company_id, data) => axios.post(Env.api_uri("company/setup/employees/requests/" + company_id), data),

    find: (company_id, charge_id) => axios.get(Env.api_uri("company/setup/employees/requests/" + company_id + "/" + charge_id)),

    update: (company_id, request_id, data) => axios.put(Env.api_uri(`company/setup/employees/requests/${company_id}/${request_id}`), data),

    publish: (company_id, request_id) => axios.get(Env.api_uri(`company/setup/employees/requests/publish/${company_id}/${request_id}`)),
};