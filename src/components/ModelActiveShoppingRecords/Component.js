import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import UserShoppingRecords from '../../API/UserShoppingRecords'
import Layout from './Layout'



function ModelActiveShoppingRecords(props) {
	
	const [ ShoppingRecords,setShoppingRecords ] = useState([])
	const user_id = props.user_id;
	const company_id = props.match.params.company_id;


	/*
	*	Getting user active shopping records charges
	*/	
	useEffect(() => {

		UserShoppingRecords.list(company_id , user_id).then(response => {
			setShoppingRecords(response.data)
		}).catch(error => { /* . . . */ });

    },[company_id, user_id]);

	return <Layout
		data={ ShoppingRecords }
	/>;
}

export default withRouter(ModelActiveShoppingRecords);
