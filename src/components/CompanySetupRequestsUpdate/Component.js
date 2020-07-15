import React,{useEffect,useState} from 'react';
import { useToasts } from 'react-toast-notifications'
import { withRouter } from 'react-router-dom'
import SETUPEMPLOYEESREQUESTS from '../../API/SetupEmployeesRequests'
import Layout from './Layout'



function CompanySetupRequestsUpdate(props) {
  
  const { addToast } = useToasts()

  const [ company_id ]  = useState(props.match.params.company_id)
  const [ request_id ]  = useState(props.match.params.request_id)
  const [ Request,setRequest ] = useState({})
  const [ RequestEnable , setRequestEnable] = useState(0)
  const [ loading ,setLoading ] = useState(true)
  const [ updated ,setUpdated ] = useState(false)
  const [ OldName , setOldName ] = useState('')




  function handleChange(value, name){
    setRequest({
        ...Request,
        [name] : value
    })        
  }


	function publishRequest(value){

		if(RequestEnable === value){
			return false;
		}

    SETUPEMPLOYEESREQUESTS.publish( company_id,request_id )
    		.then(response => {
      			setLoading(false)
      			setUpdated(true)
            setOldName(Request.request_name)
            
            let newState = ((parseInt(RequestEnable) ===1) ? 0 : 1);
            setRequestEnable(newState);
            let message = '';
            if(newState){
               message = 'habilitado'
            }
            else{
               message = 'deshabilitado'
            }

          

				
				addToast(`${Request.request_name} fue ${message}`, {
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
      
    console.log(`${company_id}/${request_id}`)

    SETUPEMPLOYEESREQUESTS.update(company_id,request_id , Request )
    .then(response => {
      setLoading(false)
      setUpdated(true)
      setOldName(Request.request_name)

      addToast(`${Request.request_name} fue actualizado`, {
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
  
        SETUPEMPLOYEESREQUESTS.find(company_id,request_id)
          .then(response => {
            setRequest(response.data)
            setOldName(response.data.request_name)
            setLoading(false)
            
            setRequestEnable(response.data.enable)
            
          })
          .catch(error => {
            // . . .
            setLoading(false)
          });
    }

      findProduct()
      
    },[request_id,company_id]);




  return (
       
    <Layout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Request={ Request }
      loading={ loading }
      updated={updated}
      OldName={OldName}
	    publishRequest={publishRequest}
	    RequestEnable={RequestEnable}
    />
					
  );
}

export default withRouter(CompanySetupRequestsUpdate);
