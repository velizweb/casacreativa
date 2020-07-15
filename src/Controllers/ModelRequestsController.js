import React,{useEffect, useState, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import SetupRequests from '../API/SetupEmployeesRequests'
import UserRequests from '../API/UserRequests'
import getFatherProps from '../Helpers/GetFatherProps'
import UserContext from '../Contexts/UserContext'

function ModelRequestsController( props ) {
      
      const user = useContext(UserContext);
      const company_id  = props.match.params.company_id
      const [ tableData, setTableData ] = useState([])
      const [TableLoading, setTableLoading ] = useState(false)
      const [ SelectFormLoading, setSelectFormLoading ] = useState(true)
      
      const [ selecTedRequestId, setselecTedRequestId ]  = useState('')
      const [ DataSetupRequests,setDataSetupRequests ] = useState([])
	

      const childrenProps = {
            ...getFatherProps(props),
            ModelRequestsProps : {

                  company_id,
                  
                  TableLoading,
                  tableData,

                  DataSetupRequests,
                  selecTedRequestId,
                  handleChangeSelect,
                  SelectFormLoading,
                  applyRequest
            }
      }

      

      const Children = React.Children.map(props.children,(child)=>{
            return React.cloneElement(child,childrenProps)
      })


      /*
      * Table data
      */
      useEffect(() => {
            setTableLoading(true)
		UserRequests.list(company_id , user.id).then(response => {
                  setTableLoading(false)
			setTableData(response.data)
            }).catch(error => { setTableLoading(false) });
      },[company_id, user])


      /*
      * Apply request form component
      */
      useEffect(() => {
            setSelectFormLoading(true)
		SetupRequests.list(company_id).then(response => {
                  setSelectFormLoading(false)
                  setDataSetupRequests(response.data)
                  
                  const temp = []
			    
			response.data.map((item,key)=>{
            
		   		temp.push({
			    		key : item.id , 
			    		text: item.request_name, 
					value : item.id
				})
			
			
			if(response.data.length === key+1)
                        setDataSetupRequests(temp)
				return true
            	})

            }).catch(error => { setSelectFormLoading(false) });
      },[company_id])

      

      function handleChangeSelect(value, name){
		setselecTedRequestId(value)
	}

      function applyRequest(){

            const data = {
                  user_id : user.id,
                  system_request_id : selecTedRequestId,
                  company_profile_id : company_id
            }

            UserRequests.applyRequest(company_id , data).then(response => {
                  setTableLoading(true)
                  setTableData(response.data)

            }).catch(error => { setTableLoading(false) });
      }


      return  Children


}

export default withRouter(ModelRequestsController);
