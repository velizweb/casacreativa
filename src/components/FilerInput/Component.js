import React from 'react';
import { withRouter } from 'react-router-dom'
import { Input} from 'semantic-ui-react'

function Component(props) {

    return (<Input 
        icon='search' placeholder='Buscar...' fluid
        control='input'
        name='Filter'
        value={props.Filter}
        onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
        />)
}

export default withRouter(Component);