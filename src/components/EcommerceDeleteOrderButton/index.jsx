import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function index(props)
{     
      return <Button negative fluid size='tiny' onClick={()=>props.onCancelCartHandler()}>
                  <Icon name='cancel' /> Cancelar orden
            </Button>
}

export default index