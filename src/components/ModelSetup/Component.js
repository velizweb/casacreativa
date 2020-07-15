import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import CONTRACTINFO from '../../API/ContractInfo'
import SystemRooms from '../../API/SystemRooms'
import Layout from './Layout'



function ModelSetup(props) {
	
  const [ ContractInfo,setContractInfo ] = useState({})
  const [ DataSystemRooms,setDataSystemRooms ] = useState([])
  const user_id = props.user_id;
	const company_id = props.match.params.company_id
  
 
  function handleChange(value, name){

		setContractInfo({
			...ContractInfo,
			[name] : value,
		})
  }
  
  /*
	*	Apply contract setup
	*/
	function applyContractSetup(){
		
    const data = ContractInfo;

		CONTRACTINFO.create(company_id , user_id, data).then(response => {
			CONTRACTINFO.list(company_id , user_id).then(response => {
				setContractInfo(response.data)
			}).catch(error => { /* . . . */ });
		}).catch(error => { /* . . . */ });
	}

    useEffect(() => { 

      function getContractInfo(){
        

        CONTRACTINFO.list(company_id,user_id)
          .then(response => {
            setContractInfo(response.data)
          })
          .catch(error => {
            /* . . . */
          });



          SystemRooms.listSelectFormat(company_id)
          .then(response => {
            setDataSystemRooms(response.data)
          })
          .catch(error => {
            /* . . . */
          });
    }
      
      getContractInfo()

    },[company_id,user_id]);

  return (
       
    <Layout
      ContractInfo={ ContractInfo }
      handleChange={handleChange}
      applyContractSetup={applyContractSetup}
      DataSystemRooms={DataSystemRooms}
    />
					
  );
}

export default withRouter(ModelSetup);
