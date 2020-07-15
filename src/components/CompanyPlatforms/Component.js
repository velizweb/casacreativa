import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import Companies from '../../API/Companies'
import Layout from './Layout'

function CompanyPlatforms(props) {

	// const user = useContext(UserContext);

  const { addToast } = useToasts()
  const company_id = props.match.params.company_id
  const [ CompanyPlatformsData, setCompanyPlatformsData ] = useState({})


  useEffect(() =>
  {
      Companies.platforms( company_id )
        .then(response => {
          setCompanyPlatformsData(response.data)
        }).catch(error => {/* . . . */});
  },[company_id])


  function handleChange(value, name)
  {
	setCompanyPlatformsData({
      ...CompanyPlatformsData,
      [name] : value
    })
  }


function handleSubmit(){
    
  Companies.companyPlatformsUpdate( company_id , CompanyPlatformsData )
      .then(response => {
        

        addToast('Plataformas actualizadas con exito', {
          appearance: 'success',
          autoDismiss: true,
          pauseOnHover: false,
	  })
	}).catch(error => {
        
        addToast('Ha ocurrido un error, vuelva a intentarlo', {
          autoDismiss: true,
          appearance: 'error',
          pauseOnHover: false,
        })
        
        
      });
}




  return <Layout
	
	  handleChange={handleChange}
	  CompanyPlatformsData={CompanyPlatformsData}
	  handleSubmit={handleSubmit}
  />
}

export default withRouter(CompanyPlatforms);
