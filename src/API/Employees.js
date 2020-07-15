import axios from "axios";
import Env from "../Env";

export default {
  list: (company_id) => axios.get(Env.api_uri("employees/" + company_id)),
  filter_models: (company_id, filter) =>
    axios.post(Env.api_uri("employees/filter_models/" + company_id), filter),
  filter_all: (company_id, filter) =>
    axios.post(Env.api_uri("employees/filter_all/" + company_id), filter),
  find: (company_id, user_id) => axios.get(Env.api_uri("employee/" + company_id + "/" + user_id)),
  update_rol: (company_id, employee_id, rol) =>
    axios.put(Env.api_uri("employee/set_rol/" + company_id + "/" + employee_id + "/" + rol)),
  delete: (company_id, employee_id) =>
    axios.delete(Env.api_uri("employee/" + company_id + "/" + employee_id)),
  create_employee_models: (company_id, data) =>
    axios.post(Env.api_uri(`employee/create_models/${company_id}`), data),
  create: (company_id, data) =>
    axios.post(Env.api_uri(`employees/${company_id}`), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  update_employee: (company_id, data) =>
    axios.post(Env.api_uri("employees/update_employee/" + company_id), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  validate_user: (email) => axios.get(Env.api_uri("user/" + email)),
  update_password: (data) =>
    axios.post(Env.api_uri(`user/updatePassword`), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};
