import axios from "axios";
import Env from "../Env";

export default {
    findUser: (id) => axios.get(Env.api_uri("admin/user/" + id)),
    signContract: (company_id) => axios.get(Env.api_uri(`company/sign/contract/${company_id}`)),
    checkSign: (company_id) => axios.get(Env.api_uri(`company/check/sign/${company_id}`)),
    aceptTerms: (company_id) => axios.get(Env.api_uri(`company/acept/terms/${company_id}`)),
};