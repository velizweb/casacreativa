import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import Layout from './Layout'
import SystemInventary from '../../API/SystemInventary';



function CompanySetupRoomsList(props) {
	
  const [ DataInventary,setDataInventary ] = useState([])
  const [ getting ,setGetting ] = useState(true)
  const [ company_id ]  = useState(props.match.params.company_id)
  	

    useEffect(() => { 

      function getDataInventary(){
        
        SystemInventary.list(company_id)
          .then(response => {
            
            setDataInventary(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });
    }
      
      getDataInventary()

    },[company_id]);

  return (
       
    <Layout
      data={ DataInventary }
      getting={ getting }
      company_id={company_id}
    />
					
  );
}

export default withRouter(CompanySetupRoomsList);
