import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

import Layout from './Layout'
import SystemInventary from '../../API/SystemInventary';



function CompanySetupInventaryCreate(props) {
  
  const { addToast } = useToasts()
  const [ loading ,setLoading ] = useState(false)
  const [ created ,setcreated ] = useState(false)
  const [company_id] = useState(props.match.params.company_id)
  

  const [ Item,setItem ] = useState({
      item_name : ''
    })
  

  function handleChange(value, name){
    setItem({
        ...Item,
        [name] : value
    })        
}

  function resetStates(){
    setLoading(false)
    setcreated(false)
    setItem({
      item_name : ''
  })
  }


  function handleSubmit(){
    
    setLoading(true)

    SystemInventary.create(company_id , Item )
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
      Item={ Item }
      loading={ loading }
      created={ created }
      company_id={company_id}
      resetStates={resetStates}
    />
					
  );
}

export default withRouter(CompanySetupInventaryCreate);
