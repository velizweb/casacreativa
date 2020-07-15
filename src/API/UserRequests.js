import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id, user_id) => axios.get(Env.api_uri(`user/requests/${company_id}/${user_id}`)),
    applyRequest: (company_id, data) => axios.post(Env.api_uri(`user/requests/apply/${company_id}`), data),
};