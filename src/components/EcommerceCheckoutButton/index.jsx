import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

function index(props)
{     
      const company_id  = props.match.params.company_id

      function goToCheckout(item){
		props.history.push(`/model/ecommerce/checkout/${company_id}`)
          }
          
      
      return <Button positive fluid size='tiny' onClick={()=>goToCheckout()} disabled={props.disabled}>
                  <Icon name='check' /> Checkout 
            </Button>
}

export default withRouter(index)