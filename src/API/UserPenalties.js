import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id, user_id) => axios.get(Env.api_uri(`user/penalties/${company_id}/${user_id}`)),
    create: (company_id, user_id, data) => axios.post(Env.api_uri(`user/penalties/${company_id}/${user_id}`), data),
};