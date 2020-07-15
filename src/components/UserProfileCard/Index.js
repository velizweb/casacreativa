import React from 'react';
import { withRouter } from 'react-router-dom'
import {Card,Image } from 'semantic-ui-react'
import Env from '../../Env'

function UserProfileCard(props) {

    if(!props.Employee){
        return ''
    }  

    
    return (
            <Card>
                <Image src={Env.storage_uri(props.Employee.avatar_image)} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{props.Employee.first_name} {props.Employee.last_name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in {props.Employee.created_at}</span>
                </Card.Meta>
                </Card.Content>
                
            </Card>			
  );
}

export default withRouter(UserProfileCard);