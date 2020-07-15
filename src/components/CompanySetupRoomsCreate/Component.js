import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import SystemRooms from '../../API/SystemRooms'
import Layout from './Layout'



function CompanySetupRoomsCreate(props) {
  
  const { addToast } = useToasts()
  const [ loading ,setLoading ] = useState(false)
  const [ created ,setcreated ] = useState(false)
  const [company_id] = useState(props.match.params.company_id)
  

  const [ Room,setRoom ] = useState({
      room_identificator : ''
    })
  

  function handleChange(value, name){
    setRoom({
        ...Room,
        [name] : value
    })        
}

  function resetStates(){
    setLoading(false)
    setcreated(false)
    setRoom({
      room_identificator : ''
  })
  }


  function handleSubmit(){
    
    setLoading(true)

    SystemRooms.create(company_id , Room )
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
      Room={ Request }
      loading={ loading }
      created={ created }
      company_id={company_id}
      resetStates={resetStates}
    />
					
  );
}

export default withRouter(CompanySetupRoomsCreate);
