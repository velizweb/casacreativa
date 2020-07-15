import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import Layout from './Layout'
import Auth from '../../API/Auth';



function AccountSecurityUpdate(props) {
  
  const { addToast } = useToasts()

  const [ loading ,setLoading ] = useState(false)
  const [ created ,setcreated ] = useState(false)
  

  const [ AccountInfo,setAccountInfo ] = useState('')
  
  function handleChange(value, name){
    setAccountInfo({
        ...AccountInfo,
        [name] : value
    })        
}

  function resetStates(){
   
    setLoading(false)
    setcreated(false)
    setAccountInfo({})
  }


  function handleSubmit(){
    
    setLoading(true)

  Auth.changePassword( AccountInfo )
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
      AccountInfo={ AccountInfo }
      loading={ loading }
      created={ created }
      resetStates={resetStates}
    />
					
  );
}

export default withRouter(AccountSecurityUpdate);
