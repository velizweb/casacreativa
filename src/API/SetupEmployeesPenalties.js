import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id) => axios.get(Env.api_uri("company/setup/employees/penalties/" + company_id)),

    create: (company_id, data) => axios.post(Env.api_uri("company/setup/employees/penalties/" + company_id), data),

    find: (company_id, penaltie_id) => axios.get(Env.api_uri("company/setup/employees/penalties/" + company_id + "/" + penaltie_id)),

    update: (company_id, penaltie_id, data) => axios.put(Env.api_uri(`company/setup/employees/penalties/${company_id}/${penaltie_id}`), data),

    publish: (company_id, penaltie_id) => axios.get(Env.api_uri(`company/setup/employees/penalties/publish/${company_id}/${penaltie_id}`)),
};