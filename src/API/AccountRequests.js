import axios from 'axios';
import Env from '../Env';

export default
  {	
      list			: ( filter, company_id ) => 
      axios.get(Env.api_uri('account_requests/'+ filter +'/'+company_id)),

      list_admin			: ( filter ) => 
      axios.get(Env.api_uri('account_requests_admin/'+ filter)),
    
      find			: ( company_id , user_id, request_id ) => 
      axios.get(Env.api_uri('account_request/'+ company_id +'/'+ user_id +'/'+ request_id)),

      create			: ( data ) => 
      axios.post(Env.api_uri('account_request/create'), data),
    
      update_datail			: (request_id, data,  ) => 
      axios.put(Env.api_uri('account_request/'+ request_id),data),

      process_request	: (id_request, data ) => 
      axios.put(Env.api_uri('account_requests/'+ id_request), data),
  }