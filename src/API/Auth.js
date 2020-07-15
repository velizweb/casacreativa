import axios from 'axios';
import Env from '../Env';

export default
{	
	register : data => axios.post(Env.api_uri('auth/register'), data),
	login : data => axios.post(Env.api_uri('auth/login'), data),
	changePassword : data => axios.put(Env.api_uri('account/update_password'), data),
}