import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import Companies from '../../API/Companies'
import Layout from './Layout'

function CompaniesList() {
	
  const [ CompaniesData,setCompaniesData ] = useState([])
  const [ loading ,setLoading ] = useState(true)
  const { addToast } = useToasts()  
   
    useEffect(() => {

      Companies.list().then(response => {
          setCompaniesData(response.data)
	        setLoading(false)
        }).catch(error => { setLoading(false) });
      
    },[]);


    function set_super_administrator_owner(company_profile_id){
      Companies.set_super_administrator_owner(company_profile_id).then(response => {
        
        Companies.list().then(response => {
          setCompaniesData(response.data)

          addToast(`Estudio actualizado satisfactoriamente`, {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: false,
          })

	        setLoading(false)
        }).catch(error => { setLoading(false) });

        setLoading(false)
      }).catch(error => { setLoading(false) });
    }


  return (
       
    <Layout
      CompaniesData={ CompaniesData }
      set_super_administrator_owner={set_super_administrator_owner}
	    loading={ loading }
    />
					
  );
}

export default withRouter(CompaniesList);
