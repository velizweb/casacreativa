import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function index(props)
{     
      return <Button positive fluid size='big' onClick={()=>props.onPayoutHandler()}>
                  <Icon name='check' /> Aplicar
            </Button>
}

export default index