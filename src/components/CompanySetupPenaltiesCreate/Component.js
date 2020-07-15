import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import SETUPEMPLOYEESPENALTIES from '../../API/SetupEmployeesPenalties'
import Layout from './Layout'



function CompanySetupPenaltiesCreate(props) {
  
  const { addToast } = useToasts()

  const [ loading ,setLoading ] = useState(false)
  const [ created ,setcreated ] = useState(false)
  

  const [ Penaltie,setPenaltie ] = useState({
    penaltie_name : '',
    enable : '',
    charge : ''
})
  
  const [company_id] = useState(props.match.params.company_id)

  function handleChange(value, name){
    setPenaltie({
        ...Penaltie,
        [name] : value
    })        
}

  function resetStates(){
    setLoading(false)
    setcreated(false)
    setPenaltie({})
  }


  function handleSubmit(){
    
    setLoading(true)

    SETUPEMPLOYEESPENALTIES.create(company_id , Penaltie )
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
      Penaltie={ Penaltie }
      loading={ loading }
      created={ created }
      company_id={company_id}
      resetStates={resetStates}
    />
					
  );
}

export default withRouter(CompanySetupPenaltiesCreate);
