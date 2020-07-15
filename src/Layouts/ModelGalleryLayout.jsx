import React from 'react'
import DividedHeader from '../gui/DividedHeader'
import { withRouter } from 'react-router-dom'
import returnChildWithProps from '../Helpers/returnChildWithProps';

function CompanyLearningListLayout (props){
    const company_id  = props.match.params.company_id
  	const companyLearningCreateURI = `/model/gallery/create/${company_id}`
  	const headerTitle = `Galería de imagenes`
  	const headerSubtitle = `Lista de fotos de la modelo para capacitaciones`
  	const headerButtonText = 'Subir imagenes'
  	const headerButtonIcon = 'plus' 
 

	/*
	*	On Header button click
	*/
	function onHeaderButtonClick(uri){
		props.history.push(uri)
	}


function openImage(item){
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
          Data : props.ModelGalleryListProps.Data,
          deleteImage : props.ModelGalleryListProps.deleteImage,
          // onItemClick: openImage
        })}

    </div>
  )
}

export default withRouter(CompanyLearningListLayout)