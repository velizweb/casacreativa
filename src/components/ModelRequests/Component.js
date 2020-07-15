import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom';
import UserRequests from '../../API/UserRequests';
import Layout from './Layout';



function ModelRequests(props) {
	
	const [ ModelRequests,setModelRequests ] = useState([])
	const user_id = props.user_id;
	const company_id = props.match.params.company_id;


	/*
	*	Getting user requests
	*/	
	useEffect(() => {

		UserRequests.list(company_id , user_id).then(response => {
			setModelRequests(response.data)
		}).catch(error => { /* . . . */ });

    },[company_id, user_id]);


	/*
	*	Return penalties management view
	*/

	return <Layout
		data={ ModelRequests }
	/>;
}

export default withRouter(ModelRequests);
