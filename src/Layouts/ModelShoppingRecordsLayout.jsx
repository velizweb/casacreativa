import React from 'react'
import returnChildWithProps from '../Helpers/returnChildWithProps';

function ModelShoppingRecordsLayout (props){
  	const headerTitle = `Compras`
  	const headerSubtitle = `Lista de compras realizadas`


return (
      <div>

        <h2 style={{marginBottom:'0px'}}>{headerTitle}</h2>
        <p style={{marginTop:'0px'}}>{headerSubtitle}</p>
      
      {
        returnChildWithProps( props.children,{
          data : props.ModelShoppingRecordsProps.data,
          onOpenItem : props.ModelShoppingRecordsProps.onOpenItem
        })
      }

      </div>
  )
}

export default ModelShoppingRecordsLayout