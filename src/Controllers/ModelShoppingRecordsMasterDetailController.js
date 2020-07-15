import React,{ useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import UserShoppingRecords from '../API/UserShoppingRecords'
import getFatherProps from '../Helpers/GetFatherProps'

function ModelShoppingRecordsMasterDetailController( props ) {
      
      
      const company_id  = props.match.params.company_id
      const master_id  = props.match.params.master_id
      const [ data, setData ] = useState([])
      const [ Loading, setLoading ] = useState(true)
      
      

      const childrenProps = {
            ...getFatherProps(props),
            ModelShoppingRecordsDetailProps : {
                  company_id,
                  data,
                  Loading,
            }
      }

      

      const Children = React.Children.map(props.children,(child)=>{
            return React.cloneElement(child,childrenProps)
      })



      useEffect(() => {

            setLoading(true)

		UserShoppingRecords.detail_master(company_id , master_id).then(response => {
                  setLoading(false)
			setData(response.data)
		}).catch(error => { setLoading(false) });
    
      },[company_id, master_id])
      


      return  Children


}

export default withRouter(ModelShoppingRecordsMasterDetailController);
