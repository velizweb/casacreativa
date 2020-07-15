import React,{ useState} from 'react'
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import CompanyLearning from '../../API/CompanyLearning'
import CompanyLearningCreateLayout from '../../Layouts/CompanyLearningCreateLayout'

function CompanyLearningCreate(props) {
      
      const [ company_id ]  = useState(props.match.params.company_id)
      const [ Loading, setLoading] = useState(false)
      const [ Progress ,setProgress ] = useState(0);
      const [ videoFile , setVideoFile ] = useState('')
      const [ Data, setData ] = useState({ title:'', description : '' })
      const { addToast } = useToasts()

      const noVideoFile = 'Se requiere un archivo de video'
      const noDescription = 'Se requiere la descripcion'
      const noTitle = 'Se requiere un titulo'
      const noCompany = 'No se especifico la empresa'
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



            if(!videoFile)
                  errorMsg = noVideoFile

            if(!Data.description)
                  errorMsg = noDescription
                  
            if(!Data.title)
                  errorMsg = noTitle

            if(!company_id)
                  errorMsg = noCompany

            if(!company_id || !Data.title || !Data.description || !videoFile){
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
            formData.append( 'title', Data.title )
            formData.append( 'description', Data.description )
            formData.append( 'videoFile', videoFile )

            CompanyLearning.create( company_id, formData, progress).then(response => {
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


        
      return  <CompanyLearningCreateLayout
                  company_id={ company_id }
                  Loading={ Loading }
                  Progress={ Progress }
                  Data={ Data }
                  setVideoFile={ setVideoFile }
                  handleChange={ handleChange }
                  onHeaderButtonClick={ onHeaderButtonClick }
            />;
}

export default withRouter(CompanyLearningCreate);