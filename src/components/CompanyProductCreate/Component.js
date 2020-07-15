import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import PRODUCT from '../../API/Product'
import Layout from './Layout'



function CompanyProductUpdate(props) {
  
  const { addToast } = useToasts()

  const [ loading ,setLoading ] = useState(false)
  const [ created ,setcreated ] = useState(false)
  

  const [ Product,setProduct ] = useState({
    product_name : '',
    enable : '',
    price : '',
    tax : ''
})
  
  const [ImageProduct, setImageProduct] = useState([]);
  const [company_id] = useState(props.match.params.company_id)
  
  
  function handleChange(value, name){
    setProduct({
        ...Product,
        [name] : value
    })        
}

  function resetStates(){
    setImageProduct([])
    setLoading(false)
    setcreated(false)
    setProduct({})
  }


  function handleSubmit(){
    
    setLoading(true)

    const formData = new FormData();
    
    if(ImageProduct[0]){
      formData.append( 'image_product', ImageProduct[0].file )
    }

  
    
    formData.append( 'company_id', company_id )
    formData.append( 'product_name', Product.product_name )
    formData.append( 'price', Product.price )
    formData.append( 'tax', Product.tax )
    formData.append( 'existence', Product.existence )
    formData.append( 'enable', Product.enable )
    

    PRODUCT.create(company_id , formData )
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
      Product={ Product }
      loading={ loading }
      created={ created }
      ImageProduct={ImageProduct}
      setImageProduct={setImageProduct}
      company_id={company_id}
      resetStates={resetStates}
    />
					
  );
}

export default withRouter(CompanyProductUpdate);
