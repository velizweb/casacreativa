import axios from 'axios';
import Env from '../Env';

export default
  {	  
      get_user_rols : ( company_id, user_id ) => axios.get(Env.api_uri(`user/company/rols/${company_id}/${user_id}`))
      
  }