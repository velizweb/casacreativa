import React from 'react';
import { withRouter } from 'react-router-dom'
import {Grid,Label,Message,List } from 'semantic-ui-react'


function Step2_preview(props) {


    const validate_keys = [
        {
            key : 'primary_phone',
            label: 'Telefono primario'
        },
        {
            key : 'secondary_phone',
            label: 'Telefono secundario'
        },
        {
            key : 'email',
            label: 'Correo electronico'
        }
    ]
    

    if(
        props.Employee.primary_phone ||
        props.Employee.secondary_phone ||
        props.Employee.email
        ){
    return <Grid.Column width={6}>
            <h3 className='text-dark'>Contacto</h3>
                <List> 
                {
                        validate_keys.map((item, key)=>{
                            if(props.Employee[item.key]){

                                return (
                                    <List.Item key={key}>
                                        <span className='mb-1 d-block text-dark'>{item.label} : </span>
                                        <Label color='black' className='mb-3'>  {props.Employee[item.key]}</Label>
                                    </List.Item>
                                )

                            } // endif
                            else{
                                return false
                            }
                        })
                    }

            </List>
        </Grid.Column>
        }

        return <Grid.Column width={8}>
        <Message>
            <Message.Header>Please provide the form fields</Message.Header>
        </Message>
        </Grid.Column>

}

export default withRouter(Step2_preview);