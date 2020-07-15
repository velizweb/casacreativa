import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import SETUPEMPLOYEESREQUESTS from '../../API/SetupEmployeesRequests'
import Layout from './Layout'



function CompanySetupRequestCreate(props) {
  
  const { addToast } = useToasts()

  const [ loading ,setLoading ] = useState(false)
  const [ created ,setcreated ] = useState(false)
  

  const [ Request,setRequest ] = useState({
    request_name : '',
    enable : '',
    charge : ''
})
  
  const [company_id] = useState(props.match.params.company_id)

  function handleChange(value, name){
    setRequest({
        ...Request,
        [name] : value
    })        
}

  function resetStates(){
    setLoading(false)
    setcreated(false)
    setRequest({})
  }


  function handleSubmit(){
    
    setLoading(true)

    SETUPEMPLOYEESREQUESTS.create(company_id , Request )
    .then(response => {
      setLoading(false)
      setcreated(true)
    })
    .catch(error => {
      addToast('Ha ocurrido un problema', {
        autoDismiss: true,
        appearance: 'error',
        pauseOnHover: false,
      })
      setLoading(false)
    });

   
  }


  return (
       
    <Layout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Request={ Request }
      loading={ loading }
      created={ created }
      company_id={company_id}
      resetStates={resetStates}
    />
					
  );
}

export default withRouter(CompanySetupRequestCreate);
