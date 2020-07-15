import axios from 'axios';
import Env from '../Env';



export default
  {	  
      list : (company_id) => axios.get(Env.api_uri(`learning/${company_id}`)),

      find : (company_id, item_id) => axios.get(Env.api_uri(`learning/${company_id}/${item_id}`)),

      update : (company_id, item_id, data) => axios.put(Env.api_uri(`learning/${company_id}/${item_id}`), data),

      create : (company_id, data, progress) => 
		axios.post( Env.api_uri(`learning/${company_id}`), data,{
            onUploadProgress : progress,
        		headers: {
            	      'Content-Type': 'multipart/form-data',
          		}
		}),
  }


  