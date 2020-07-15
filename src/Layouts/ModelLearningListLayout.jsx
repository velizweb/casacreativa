import React from 'react'
import { withRouter } from 'react-router-dom'
import returnChildWithProps from '../Helpers/returnChildWithProps';

function ModelLearningListLayout (props){
    const company_id  = props.match.params.company_id
  	const headerTitle = `Capacitaciones`
  	const headerSubtitle = `Lista de videos para capacitaciones`
  	 

function openVideo(item){
  props.history.push(`/model/learning/find/${company_id}/${item.id}`)
}

return (
    
      <div>
        <h2 style={{marginBottom:'0px'}}>{headerTitle}</h2>
        	<p style={{marginTop:'0px'}}>{headerSubtitle}</p>
      
      {returnChildWithProps( props.children,
        {
          Data : props.CompanyLearningListProps.Data,
          onItemClick: openVideo
        })}

        </div>
  )
}

export default withRouter(ModelLearningListLayout)