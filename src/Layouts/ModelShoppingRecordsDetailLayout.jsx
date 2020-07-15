import React from 'react'
import returnChildWithProps from '../Helpers/returnChildWithProps';

function ModelShoppingRecordsDetailLayout (props){
  	const headerTitle = `Compras`
  	const headerSubtitle = `Detalle de la orden`


return (
      <div>

        <h2 style={{marginBottom:'0px'}}>{headerTitle}</h2>
        <p style={{marginTop:'0px'}}>{headerSubtitle}</p>
      
      {
        returnChildWithProps( props.children,{
          data : props.ModelShoppingRecordsDetailProps.data
        })
      }

      </div>
  )
}

export default ModelShoppingRecordsDetailLayout