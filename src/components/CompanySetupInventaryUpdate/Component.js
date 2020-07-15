import React,{useEffect,useState} from 'react';
import { useToasts } from 'react-toast-notifications'
import { withRouter } from 'react-router-dom'
import Layout from './Layout'
import SystemInventary from '../../API/SystemInventary';



function CompanySetupInventaryUpdate(props) {
  
  const { addToast } = useToasts()

  const [ company_id ]  = useState(props.match.params.company_id)
  const [ item_id ]  = useState(props.match.params.item_id)
  const [ Item,setItem ] = useState({})
  const [ loading ,setLoading ] = useState(true)
  const [ updated ,setUpdated ] = useState(false)
  const [ OldName , setOldName ] = useState('')




  function handleChange(value, name){
    setItem({
        ...Item,
        [name] : value
    })        
  }

  function handleSubmit(){
    
    setLoading(true)
    SystemInventary.update(company_id,item_id , Item )
    .then(response => {
      setLoading(false)
      setUpdated(true)
      setOldName(Item.item_name)

      addToast(`${Item.item_name} fue actualizado`, {
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
      function getInventary(){
      
        setLoading(true)
  
        SystemInventary.find(company_id,item_id)
          .then(response => {
            setItem(response.data)
            setOldName(response.data.item_name)
            setLoading(false)
          })
          .catch(error => {
            // . . .
            setLoading(false)
          });
    }

      getInventary()
      
    },[company_id, item_id]);




  return (
       
    <Layout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Item={ Item }
      loading={ loading }
      updated={updated}
      OldName={OldName}
	  
    />
					
  );
}

export default withRouter(CompanySetupInventaryUpdate);
