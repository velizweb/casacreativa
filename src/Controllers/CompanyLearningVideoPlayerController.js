import React,{useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import CompanyLearning from '../API/CompanyLearning'
import getFatherProps from '../Helpers/GetFatherProps'


function CompanyLearningVideoPlayerController( props ) {
	
      const company_id   = props.match.params.company_id
      const item_id  = props.match.params.item_id
      const [ Item, setItem ] = useState('')
      const [ Loading, setLoading ] = useState(true)

      const childrenProps = {
            ...getFatherProps(props),
            CompanyLearningVideoPlayerProps : {
                  Item,
                  item_id,
                  Loading,
                  company_id,
            }
      }

      useEffect(()=>{
            CompanyLearning.find(company_id, item_id).then(response => {
                  setItem(response.data)
                  setLoading(false)
                })
                .catch(error => {
                  setLoading(false)
                });
      },[company_id, item_id])

     
      

      const Children = React.Children.map(props.children,(child)=>{
            return React.cloneElement(child,childrenProps)
      })

      

      return  Children
}

export default withRouter(CompanyLearningVideoPlayerController);
