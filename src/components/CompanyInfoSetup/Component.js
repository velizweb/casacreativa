import React,{useState,useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import Layout from './Layout'
import Company from '../../API/Companies';



function CompanyInfoSetup(props) {
  
  const { addToast } = useToasts()
  const [ company_id ]  = useState(props.match.params.company_id)
  const [ loading ,setLoading ] = useState(false)
  const [ CompanyInfo,setCompanyInfo ] = useState('')
  const [ primaryLogo , setPrimaryLogo ] = useState(null)
  const [ secondaryLogo, setSecondaryLogo] = useState(null)
  const [ logo1, setLogo1 ] = useState('')
  const [ logo2, setLogo2 ] = useState('')


  
  function handleChange(value, name){
    setCompanyInfo({
        ...Company,
        [name] : value
    })
}

	function handleSubmit(){
    
    		setLoading(true)
			const formData = new FormData();
			formData.append( 'company_id', company_id )
			formData.append( 'primaryLogo', logo1 )
			// formData.append( 'secondaryLogo', logo2 )
			formData.append( 'company_info', {...CompanyInfo} )

    		Company.updateInfo( company_id, formData).then(response => {
				setLoading(false)
				props.history.push(`/company/dashboard/${company_id}`)
    		}).catch(error => {
      		addToast('Ha ocurrido un problema', {
        			autoDismiss: true,
        			appearance: 'error',
        			pauseOnHover: false,
      		})
      		setLoading(false)
    		});
  	}

	useEffect(()=>{

		Company.getInfo( company_id ).then(response => {
			setLoading(false)
			setCompanyInfo(response.data)
		  }).catch(error => {
		    addToast('Ha ocurrido un problema', {
				autoDismiss: true,
				appearance: 'error',
				pauseOnHover: false,
		    })
		    setLoading(false)
		  });

	},[company_id])


 


  return (
       
    <Layout
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      CompanyInfo={ CompanyInfo }
      loading={ loading }
      primaryLogo={ primaryLogo }
	  setPrimaryLogo={ setPrimaryLogo }
	  secondaryLogo={secondaryLogo}
	  setSecondaryLogo={setSecondaryLogo}
	  setLogo1={setLogo1}
	  setLogo2={setLogo2}
	  logo1={logo1} 
	  logo2={logo2}
    />
					
  );
}

export default withRouter(CompanyInfoSetup);
