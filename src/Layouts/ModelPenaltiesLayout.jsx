import React from 'react'
import returnChildWithProps from '../Helpers/returnChildWithProps';

function ModelPenaltiesLayout (props){
  	const headerTitle = `Multas`
  	const headerSubtitle = `Lista de multas activas`


return (
      <div>

        <h2 style={{marginBottom:'0px'}}>{headerTitle}</h2>
        <p style={{marginTop:'0px'}}>{headerSubtitle}</p>
      
      {
        returnChildWithProps( props.children,{
          data : props.ModelPenaltiesProps.data
        })
      }

      </div>
  )
}

export default ModelPenaltiesLayout