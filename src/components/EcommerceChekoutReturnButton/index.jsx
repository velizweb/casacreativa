import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

function index(props)
{     
      const company_id  = props.match.params.company_id

      function goToStore(item){
		props.history.push(`/model/ecommerce/${company_id}`)
          }
          
      
      return <Button positive fluid size='tiny' onClick={()=>goToStore()}>
                  <Icon name='long arrow alternate left' /> Regresar a la tienda 
            </Button>
}

export default withRouter(index)