import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id, user_id) => axios.get(Env.api_uri(`gallery/${company_id}/${user_id}`)),
    delete: (company_id, item_id) => axios.delete(Env.api_uri(`gallery/${company_id}/${item_id}`)),
    create: (company_id, user_id, data, progress) =>
        axios.post(Env.api_uri(`gallery/${company_id}/${user_id}`), data, {
            onUploadProgress: progress,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }),
};