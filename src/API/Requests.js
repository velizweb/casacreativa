import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id, filter) => axios.get(Env.api_uri("requests/" + company_id + "/" + filter)),
    process_request: (company_id, id_request, data) => axios.put(Env.api_uri("requests/" + company_id + "/" + id_request), data),
};