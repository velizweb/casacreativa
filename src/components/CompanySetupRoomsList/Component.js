import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import Layout from './Layout'
import SystemRooms from '../../API/SystemRooms';



function CompanySetupRoomsList(props) {
	
  const [ DataRooms,setDataRooms ] = useState([])
  const [ getting ,setGetting ] = useState(true)
  const [ company_id ]  = useState(props.match.params.company_id)
  	

    useEffect(() => { 

      function getSystemRooms(){
        
        SystemRooms.list(company_id)
          .then(response => {
            
            setDataRooms(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });
    }
      
      getSystemRooms()

    },[company_id]);

  return (
       
    <Layout
      data={ DataRooms }
      getting={ getting }
      company_id={company_id}
    />
					
  );
}

export default withRouter(CompanySetupRoomsList);
