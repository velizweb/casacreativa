import React from 'react'
import DividedHeader from '../gui/DividedHeader'
import { withRouter } from 'react-router-dom'
import returnChildWithProps from '../Helpers/returnChildWithProps';

function CompanyLearningListLayout (props){
    const company_id  = props.match.params.company_id
  	const companyLearningCreateURI = `/company/learning/create/${company_id}`
  	const headerTitle = `Capacitaciones`
  	const headerSubtitle = `Lista de videos para capacitaciones`
  	const headerButtonText = 'Nuevo video'
  	const headerButtonIcon = 'plus' 
 

	/*
	*	On Header button click
	*/
	function onHeaderButtonClick(uri){
		props.history.push(uri)
	}


function openVideo(item){
  props.history.push(`/company/learning/find/${item.company_profile_id}/${item.id}`)
}

return (
    <div>
        <DividedHeader
          title={ headerTitle }
          subtitle={ headerSubtitle }
          buttonText={ headerButtonText }
          headerButtonIcon={ headerButtonIcon }
          onHeaderButtonClick={ ()=>onHeaderButtonClick(companyLearningCreateURI) }
          />
      
      {returnChildWithProps( props.children,
        {
          Data : props.CompanyLearningListProps.Data,
          onItemClick: openVideo
        })}

    </div>
  )
}

export default withRouter(CompanyLearningListLayout)