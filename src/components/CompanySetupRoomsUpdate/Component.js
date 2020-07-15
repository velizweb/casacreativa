import React,{useEffect,useState} from 'react';
import { useToasts } from 'react-toast-notifications'
import { withRouter } from 'react-router-dom'
import Layout from './Layout'
import SystemRooms from '../../API/SystemRooms';



function CompanySetupRoomsUpdate(props) {
  
  const { addToast } = useToasts()

  const [ company_id ]  = useState(props.match.params.company_id)
  const [ room_id ]  = useState(props.match.params.room_id)
  const [ Room,setRoom ] = useState({})
  const [ loading ,setLoading ] = useState(true)
  const [ updated ,setUpdated ] = useState(false)
  const [ OldName , setOldName ] = useState('')




  function handleChange(value, name){
    setRoom({
        ...Room,
        [name] : value
    })        
  }

  function handleSubmit(){
    
    setLoading(true)
    SystemRooms.update(company_id,room_id , Room )
    .then(response => {
      setLoading(false)
      setUpdated(true)
      setOldName(Room.room_identificator)

      addToast(`${Room.room_identificator} fue actualizado`, {
        appearance: 'success',
        autoDismiss: true,
        pauseOnHover: false,
      })

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


    useEffect(() => {
      function findRoom(){
      
        setLoading(true)
  
        SystemRooms.find(company_id,room_id)
          .then(response => {
            setRoom(response.data)
            setOldName(response.data.room_identificator)
            setLoading(false)
          })
          .catch(error => {
            // . . .
            setLoading(false)
          });
    }

      findRoom()
      
    },[room_id,company_id]);




  return (
       
    <Layout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Room={ Room }
      loading={ loading }
      updated={updated}
      OldName={OldName}
	  
    />
					
  );
}

export default withRouter(CompanySetupRoomsUpdate);
