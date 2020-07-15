import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import PRODUCTS from '../../API/Product'
import Layout from './Layout'



function CompanyProducts(props) {
	
  const [ DataProducts,setDataProducts ] = useState([])
  const [ getting ,setGetting ] = useState(true)
  const [ company_id ]  = useState(props.match.params.company_id)
  	

    useEffect(() => { 

      function getCompanyProducts(){
        
        PRODUCTS.list(company_id)
          .then(response => {
            
            setDataProducts(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });
    }
      
      getCompanyProducts()

    },[company_id]);

  return (
       
    <Layout
      data={ DataProducts }
      getting={ getting }
      company_id={company_id}
    />
					
  );
}

export default withRouter(CompanyProducts);
