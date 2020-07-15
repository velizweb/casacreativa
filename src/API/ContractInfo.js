import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id, user_id) => axios.get(Env.api_uri(`user/contract/${company_id}/${user_id}`)),
    create: (company_id, user_id, data) => axios.put(Env.api_uri(`user/contract/${company_id}/${user_id}`), data),
};