import React,{ useState, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import ModelGallery from '../../API/ModelGallery'
import ModelGalleryCreateLayout from '../../Layouts/ModelGalleryCreateLayout'
import UserContext from '../../Contexts/UserContext'

function ModelGalleryCreate(props) {
      
      const user = useContext(UserContext);
      const [ company_id ]  = useState(props.match.params.company_id)
      const [ Loading, setLoading] = useState(false)
      const [ Progress ,setProgress ] = useState(0);
      const [ ImageFiles , setImageFiles ] = useState('')
      const [ Data, setData ] = useState({ title:'', description : '' })
      const { addToast } = useToasts()

      const noImageFile = 'Se requiere una imagen'
      const noUploaded = 'Ha ocurrido un error al subir el archivo al servidor, intentelo nuevamente o revise su conexion'
      const uploadedSuccess = 'Archivo subido correctamente'

      

      function handleChange(value, name){
            setData({
                ...Data,
                [name] : value
            })        
      }



      function progress(ev){
            const percentCompleted = Math.floor((ev.loaded * 100) / ev.total )
            setProgress( parseInt(percentCompleted) )
      }
      

      
      function validateForm(){
            let errorMsg = ''



            if(!ImageFiles)
                  errorMsg = noImageFile


            if(!company_id  || !ImageFiles){
                  addToast(errorMsg, {
                        appearance: 'error',
                        autoDismiss: true,
                        pauseOnHover: false,
                  })
                  
                  return false
            }

            return true
      }


      function onHeaderButtonClick(){
            
            
            if(!validateForm())
                  return
                  
            setLoading(true)

            const formData = new FormData();
            formData.append( 'company_id', company_id )
            formData.append( 'ImageFile[]', ImageFiles )

            for(let i=0; i <= ImageFiles.length-1; i++){
                  formData.append( 'ImageFile[]', ImageFiles[i] )
            }
            

            ModelGallery.create( company_id, user.id , formData , progress ).then(response => {
                  
                  setData(response.data)
                  setLoading(false)

                  addToast(uploadedSuccess, {
                        appearance: 'success',
                        autoDismiss: true,
                        pauseOnHover: false,
                  })
                  
            }).catch(error => {
                  setProgress(0)
                  setLoading(false)
                  addToast(noUploaded, {
                        appearance: 'error',
                        autoDismiss: true,
                        pauseOnHover: false,
                  })
            });
      }


        
      return  <ModelGalleryCreateLayout
                  company_id={ company_id }
                  Loading={ Loading }
                  Progress={ Progress }
                  Data={ Data }
                  setImageFiles={ setImageFiles }
                  handleChange={ handleChange }
                  onHeaderButtonClick={ onHeaderButtonClick }
            />;
}

export default withRouter(ModelGalleryCreate);