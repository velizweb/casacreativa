import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id, room_id) => axios.get(Env.api_uri(`system/rooms/inventary/${company_id}/${room_id}`)),

    create: (company_id, room_id, data) => axios.post(Env.api_uri(`system/rooms/inventary/${company_id}/${room_id}`), data),

    delete: (company_id, room_id, item_id) => axios.delete(Env.api_uri(`system/rooms/inventary/${company_id}/${room_id}/${item_id}`)),
};