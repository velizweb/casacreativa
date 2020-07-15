import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import SETUPEMPLOYEESREQUESTS from '../../API/SetupEmployeesRequests'
import Layout from './Layout'

function CompanySetupRequestsList(props) {
	
  const [ DataProducts,setDataProducts ] = useState([])
  const [ getting ,setGetting ] = useState(true)
  const [ company_id ]  = useState(props.match.params.company_id)
  	

    useEffect(() => { 

      function getCompanyProducts(){
        
        SETUPEMPLOYEESREQUESTS.list(company_id).then(response => {
            setDataProducts(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });
    }
      
      getCompanyProducts()

    },[company_id]);

  return (
       
    <Layout
      data={ DataProducts }
      getting={ getting }
      company_id={company_id}
    />
					
  );
}

export default withRouter(CompanySetupRequestsList);
