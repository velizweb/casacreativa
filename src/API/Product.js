import axios from "axios";
import Env from "../Env";

export default {
    list: (company_id) => axios.get(Env.api_uri("products/" + company_id)),

    find: (product_id) => axios.get(Env.api_uri("product/" + product_id)),

    publish: (product_id) => axios.get(Env.api_uri("product/update/publish/" + product_id)),

    update: (company_id, data) =>
        axios.post(Env.api_uri("product/update/" + company_id), data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }),

    create: (company_id, data) =>
        axios.post(Env.api_uri("product/" + company_id), data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }),
};