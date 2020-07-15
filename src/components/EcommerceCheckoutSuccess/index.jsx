import React from 'react'
import { Button, Icon, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

function index(props)
{     
      const company_id  = props.match.params.company_id

      function goToCheckout(item){
		props.history.push(`/model/ecommerce/${company_id}`)
          }
          
      
      return (
            <Segment>
                  <center>
                        <h1>La orden fue procesada satisfactoriamente</h1>
                        <Button positive fluid size='tiny' onClick={()=>goToCheckout()} disabled={props.disabled}>
                              <Icon name='check' /> Volver a la tienda 
                        </Button>
                  </center>
            </Segment>
      )
}

export default withRouter(index)