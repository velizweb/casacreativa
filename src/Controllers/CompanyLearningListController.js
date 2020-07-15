import React,{useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import CompanyLearning from '../API/CompanyLearning'
import getFatherProps from '../Helpers/GetFatherProps'

function CompanyLearningListController( props ) {
	
      const company_id  = props.match.params.company_id
      const [ Data, setData ] = useState([])
      const [ Loading, setLoading ] = useState(true)
      
      
      
      const childrenProps = {
            ...getFatherProps(props),
            CompanyLearningListProps : {
                  company_id,
                  Data,
                  Loading,
            }
      }

      

      const Children = React.Children.map(props.children,(child)=>{
            return React.cloneElement(child,childrenProps)
      })



      useEffect(()=>{
            CompanyLearning.list(company_id).then(response => {
                  setData(response.data)
                  setLoading(false)
                })
                .catch(error => {
                  setLoading(false)
                });
      },[company_id])
      


      return  Children


}

export default withRouter(CompanyLearningListController);
