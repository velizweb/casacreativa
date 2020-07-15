import React,{useEffect,useState,useContext} from 'react';
import UserRolsContext from '../../Contexts/UserRolsContext'
import COMPANIES from '../../API/Companies'
import Layout from './Layout'
import { withRouter } from 'react-router-dom'

function CompanySelector(props) {
	
	const [ DataCompanies , setDataCompanies ] = useState([])
	const {setUserRols} = useContext(UserRolsContext);

    	useEffect(() => {

		setUserRols([])
		
		COMPANIES.companyAccess().then(response => {
			setDataCompanies(response.data)
		}).catch(error => { /* . . .*/ });
    	} , [setUserRols] );
	
	function handleItemClick(page){

		props.history.push(page)
	}

	useEffect(()=>{

	} , [DataCompanies] )

  	return <Layout 
			data={ DataCompanies } 
			handleItemClick={handleItemClick} 
		/>
					
}

export default withRouter(CompanySelector);
