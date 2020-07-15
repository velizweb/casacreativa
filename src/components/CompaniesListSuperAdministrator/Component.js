import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import Companies from '../../API/Companies'
import Layout from './Layout'

function CompaniesListSuperAdministrator() {
	
  const [ CompaniesData,setCompaniesData ] = useState([])
  const [ loading ,setLoading ] = useState(true)
     
    useEffect(() => {

      Companies.super_administrator_list().then(response => {
          setCompaniesData(response.data)
	        setLoading(false)
        }).catch(error => { setLoading(false) });
      
    },[]);



  return (
       
    <Layout
      CompaniesData={ CompaniesData }
	    loading={ loading }
    />
					
  );
}

export default withRouter(CompaniesListSuperAdministrator);
