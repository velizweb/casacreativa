import React,{useEffect,useState} from 'react';
import { useToasts } from 'react-toast-notifications'
import { withRouter } from 'react-router-dom'
import SETUPEMPLOYEESPENALTIES from '../../API/SetupEmployeesPenalties'
import Layout from './Layout'



function CompanySetupPenaltiesUpdate(props) {
  
  const { addToast } = useToasts()
  const [ company_id ]  = useState(props.match.params.company_id)
  const [ penaltie_id ]  = useState(props.match.params.penaltie_id)
  const [ Penaltie,setPenaltie ] = useState({})
  const [ PenaltieEnable , setPenaltieEnable] = useState(0)
  const [ loading ,setLoading ] = useState(true)
  const [ updated ,setUpdated ] = useState(false)
  const [ OldName , setOldName ] = useState('')


  function handleChange(value, name){
    setPenaltie({
        ...Penaltie,
        [name] : value
    })        
  }


	function publishPenaltie(value){

		if(PenaltieEnable === value){
			return false;
		}

    SETUPEMPLOYEESPENALTIES.publish( company_id,penaltie_id )
    		.then(response => {
      			setLoading(false)
      			setUpdated(true)
            setOldName(Penaltie.penaltie_name)
            
            let newState = ((parseInt(PenaltieEnable) ===1) ? 0 : 1);
            setPenaltieEnable(newState);
            let message = '';
            if(newState){
               message = 'habilitado'
            }
            else{
               message = 'deshabilitado'
            }

          

				
				addToast(`${Penaltie.penaltie_name} fue ${message}`, {
					appearance: (newState) ? 'success' : 'error' ,
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
  function handleSubmit(){
    
    setLoading(true)
      
    SETUPEMPLOYEESPENALTIES.update(company_id,penaltie_id , Penaltie )
    .then(response => {
      setLoading(false)
      setUpdated(true)
      setOldName(Penaltie.penaltie_name)

      addToast(`${Penaltie.penaltie_name} fue actualizado`, {
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
      function findProduct(){
      
        setLoading(true)

        SETUPEMPLOYEESPENALTIES.find(company_id,penaltie_id)
          .then(response => {
            setPenaltie(response.data)
            setOldName(response.data.penaltie_name)
            setLoading(false)
            
            setPenaltieEnable(response.data.enable)
            
          })
          .catch(error => {
            // . . .
            setLoading(false)
          });
    }

      findProduct()
      
    },[penaltie_id,company_id]);




  return (
       
    <Layout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Penaltie={ Penaltie }
      loading={ loading }
      updated={updated}
      OldName={OldName}
	    publishPenaltie={publishPenaltie}
	    PenaltieEnable={PenaltieEnable}
    />
					
  );
}

export default withRouter(CompanySetupPenaltiesUpdate);
