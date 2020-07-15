import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import Layout from './Layout'
import Companies from '../../API/Companies';



function CompaniesCreate(props) {
  
  const { addToast } = useToasts()

  const [ loading ,setLoading ] = useState(false)
  const [ created ,setcreated ] = useState(false)
  

  const [ CompanyData,setCompanyData ] = useState({
    company_name : '',
    address : '',
    company_primary_phone : '',
    company_secondary_phone : '',
    company_email : '',
    user_email : '',
    user_password : '',
    user_first_name : '',
    user_last_name : '',

})
  
  function handleChange(value, name){
    setCompanyData({
        ...CompanyData,
        [name] : value
    })        
}

  function resetStates(){
   
    setLoading(false)
    setcreated(false)
    setCompanyData({})
  }


  function handleSubmit(){
    
    setLoading(true)

  Companies.create( CompanyData )
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
      CompanyData={ CompanyData }
      loading={ loading }
      created={ created }
      resetStates={resetStates}
    />
					
  );
}

export default withRouter(CompaniesCreate);
