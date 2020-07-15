import React from 'react';
import { withRouter } from 'react-router-dom'
import {Header, Button, Divider, Icon } from 'semantic-ui-react'

function NoItems(props){

    function handleButtonClick(page){
        props.history.push(page)
	}
    
    function executeCallback(){
        props.secondCallback()
    }

    return (

            <Header as='h2' icon >
                <Icon name='bullhorn' />
                {props.title}
                <Header.Subheader>
                {props.message}
                </Header.Subheader>
                <Divider/>
                {(props.firstPage && props.firstButtonText) && <Button positive onClick={()=>handleButtonClick(props.firstPage)}>{props.firstButtonText}</Button> }
                {(props.secondPage && props.secondButtonText) && <Button positive onClick={()=>executeCallback()}>{props.secondButtonText}</Button> }
                
                

            </Header>
    )


}


export default withRouter(NoItems)

