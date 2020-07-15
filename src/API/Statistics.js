import axios from "axios";
import Env from "../Env";

export default {
    countEmployes: (company_id) => axios.get(Env.api_uri("statistics/count/employees/" + company_id)),
    countProducts: (company_id) => axios.get(Env.api_uri("statistics/count/products/" + company_id)),
    countCompanies: () => axios.get(Env.api_uri("statistics/count/companies")),
    platformsStates: (company_id, data) => axios.post(Env.api_uri("statistics/platforms/states/" + company_id), data),
};