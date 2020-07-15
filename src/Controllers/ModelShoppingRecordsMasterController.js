import React,{useEffect, useState, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import UserShoppingRecords from '../API/UserShoppingRecords'
import getFatherProps from '../Helpers/GetFatherProps'
import UserContext from '../Contexts/UserContext'

function ModelShoppingRecordsController( props ) {
      
      const user = useContext(UserContext);
      const company_id  = props.match.params.company_id
      const [ data, setData ] = useState([])
      const [ Loading, setLoading ] = useState(true)
      
      

      const childrenProps = {
            ...getFatherProps(props),
            ModelShoppingRecordsProps : {
                  company_id,
                  data,
                  Loading,
                  onOpenItem
            }
      }

      

      const Children = React.Children.map(props.children,(child)=>{
            return React.cloneElement(child,childrenProps)
      })



      useEffect(() => {

            setLoading(true)

		UserShoppingRecords.list_master(company_id , user.id).then(response => {
                  setLoading(false)
			setData(response.data)
		}).catch(error => { setLoading(false) });
    
      },[company_id, user])
      

      function onOpenItem(item){
            props.history.push(`/model/shopping-records/detail/${company_id}/${item.id}`)
      }


      return  Children


}

export default withRouter(ModelShoppingRecordsController);
