import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id, user_id) => axios.get(Env.api_uri(`user/shopping-records/${company_id}/${user_id}`)),
    list_master: (company_id) => axios.get(Env.api_uri(`user/shopping-records-master/${company_id}`)),
    detail_master: (company_id, master_id) => axios.get(Env.api_uri(`user/shopping-records-master-detail/${company_id}/${master_id}`)),

    checkout: (company_id, data) => axios.post(Env.api_uri(`user/shopping-records/checkout/${company_id}`), data),
};