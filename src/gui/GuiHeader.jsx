import React from 'react';
import { withRouter } from 'react-router-dom'
import {Header,Button } from 'semantic-ui-react'

function GuiHeader(props){

    function handleButtonClick(page){
        props.history.push(page)
	}

if(!props.button_text){
    return (
        <div>
        <Header as='h2'>
            {props.header_text}
            {(props.button_text) ?  <Header.Subheader>
                {props.header_sub_text}
            </Header.Subheader> : ''}
           
	    </Header>
    </div>
    )
}

return (
    <div>
        <Header as='h2' floated='right'>
            <Button 
                positive
                onClick={()=>handleButtonClick(props.page)}
                >
                {props.button_text}
            </Button>
        </Header>
        <Header as='h2' floated='left'>
            {props.header_text}
            {(props.button_text) ?  <Header.Subheader>
                {props.header_sub_text}
            </Header.Subheader> : ''}
	    </Header>
    </div>
)

}

export default withRouter(GuiHeader)