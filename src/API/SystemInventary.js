import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id) => axios.get(Env.api_uri(`system/inventary/${company_id}`)),

    listSelectFormat: (company_id) => axios.get(Env.api_uri(`system/inventary/select-format/${company_id}`)),

    create: (company_id, data) => axios.post(Env.api_uri(`system/inventary/${company_id}`), data),

    find: (company_id, room_id) => axios.get(Env.api_uri(`system/inventary/find/${company_id}/${room_id}`)),

    update: (company_id, room_id, data) => axios.put(Env.api_uri(`system/inventary/${company_id}/${room_id}`), data),
};