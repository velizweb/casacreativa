import React,{useEffect,useState} from 'react';
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import { withRouter } from 'react-router-dom'

import Env from '../../Env'
import PRODUCT from '../../API/Product'
import Layout from './Layout'



function CompaniesUpdate(props) {
  
  const { addToast } = useToasts()

  const [ product_id ]  = useState(props.match.params.product_id)
  const [ Product,setProduct ] = useState({})
  const [ ProductEnable , setProductEnable] = useState(0)
  const [ loading ,setLoading ] = useState(true)
  const [ updated ,setUpdated ] = useState(false)
  const [ OldName , setOldName ] = useState('')
  const [ ImageProduct ,setImageProduct ] = useState([])
  const [OldImage , setOldImage] = useState('')



  function handleChange(value, name){
    setProduct({
        ...Product,
        [name] : value
    })        
  }


	function publishProduct(value){

		if(ProductEnable === value){
			return false;
		}

    	PRODUCT.publish( product_id )
    		.then(response => {
      			setLoading(false)
      			setUpdated(true)
      			setOldName(Product.product_name)

				  setProductEnable( (parseInt(ProductEnable) ===1) ? 0 : 1) ;
				
				addToast(`${Product.product_name} fue publicado`, {
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
  function handleSubmit(){
    
    setLoading(true)
    const formData = new FormData();
    if(ImageProduct[0]){
      formData.append( 'image_product', ImageProduct[0].file )
    }

    formData.append( 'company_id', props.match.params.company_id )
    formData.append( 'product_name', Product.product_name )
    formData.append( 'price', Product.price )
    formData.append( 'tax', Product.tax )
    formData.append( 'existence', Product.existence )
    formData.append( 'enable', Product.enable )
    formData.append( 'description', Product.description )
    

    PRODUCT.update(props.match.params.product_id , formData )
    .then(response => {
      setLoading(false)
      setUpdated(true)
      setOldName(Product.product_name)

      addToast(`${Product.product_name} fue actualizado`, {
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
  
        PRODUCT.find(product_id)
          .then(response => {
            setProduct(response.data)
            setOldName(response.data.product_name)
            setLoading(false)
			setProductEnable(response.data.enable)
            var imageurl = Env.storage_uri(response.data.avatar_url);

            axios.get(imageurl, {
              headers : null,
                responseType: 'blob'
            })
            .then(function (response) {

              // return false;
                var reader = new window.FileReader();
                reader.readAsDataURL(response.data); 
                reader.onload = function() {
                  setOldImage( reader.result)
                }
            });

           


          })
          .catch(error => {
            // . . .
            setLoading(false)
          });
    }

      findProduct()
      
    },[product_id]);




  return (
       
    <Layout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Product={ Product }
      loading={ loading }
      updated={updated}
      ImageProduct={ImageProduct}
      setImageProduct={setImageProduct}
      OldName={OldName}
	  OldImage={OldImage}
	  publishProduct={publishProduct}
	  ProductEnable={ProductEnable}
    />
					
  );
}

export default withRouter(CompaniesUpdate);
