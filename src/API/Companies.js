import axios from 'axios';
import Env from '../Env';

export default
  {	
    companyAccess : () => axios.get(Env.api_uri('company/access')),
    getInfo : (company_profile_id) => axios.get(Env.api_uri(`company/info/${company_profile_id}`)),
    updateInfo : (company_id,  data, progress) => 
		  axios.post( Env.api_uri(`company/info/${company_id}`), data,{
            onUploadProgress : progress,
        		headers: {
            	      'Content-Type': 'multipart/form-data',
          		}
		  }),

    list : () => axios.get(Env.api_uri('companies')),
    
    create : (data) => axios.post(Env.api_uri('companies'), data ),

    set_super_administrator_owner : (company_profile_id) => axios.get(Env.api_uri('companies/super_administrator_owner/'+company_profile_id) ),

    super_administrator_list : () => axios.get(Env.api_uri('companies/super_administrator') ),

    platforms : (company_id) => axios.get(Env.api_uri('companies/platforms/'+company_id) ),
    companyPlatformsUpdate : (company_id, data) => axios.put(Env.api_uri('companies/platforms/'+company_id), data ),

    
  }