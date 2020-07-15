import React,{useEffect, useState, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import UserPenalties from '../API/UserPenalties'
import getFatherProps from '../Helpers/GetFatherProps'
import UserContext from '../Contexts/UserContext'

function ModelPenaltiesController( props ) {
      
      const user = useContext(UserContext);
      const company_id  = props.match.params.company_id
      const [ data, setData ] = useState([])
      const [ Loading, setLoading ] = useState(true)
      
      

      const childrenProps = {
            ...getFatherProps(props),
            ModelPenaltiesProps : {
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

		UserPenalties.list(company_id , user.id).then(response => {
                  setLoading(false)
			setData(response.data)
		}).catch(error => { setLoading(false) });
    
      },[company_id, user])
      


      return  Children


}

export default withRouter(ModelPenaltiesController);
