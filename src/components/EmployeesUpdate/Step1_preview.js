import React from 'react';
import { withRouter } from 'react-router-dom'
import {Grid,Label,Message,List } from 'semantic-ui-react'


function Step1Preview(props) {


    const validate_keys = [
        {
            key : 'first_name',
            label: 'Nombres'
        },
        {
            key : 'last_name',
            label: 'Apellidos'
        },
        {
            key : 'gender',
            label: 'Genero'
        },
        {
            key : 'identification_type',
            label: 'Tipo de identificacion'
        },
        {
            key : 'identification_number',
            label: 'Numero de identificacion'
        }
    ]  

    if(
        props.Employee.first_name ||
        props.Employee.last_name ||
        props.Employee.gender ||
        props.Employee.identification_type ||
        props.Employee.identification_number
        ){
    return <Grid.Column width={6}>
            <h3 className='text-dark'>Informacion personal</h3>
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
                            else
                            {
                                return false
                            } 
                            
                        })// endMap
                    }

            </List>
        </Grid.Column>
    }


        
            return <Grid.Column width={8}>
                    <Message>
                        <Message.Header>Provea esta informacion</Message.Header>
                        <Message.List>
                            <Message.Item>You can now have cover images on blog pages</Message.Item>
                        </Message.List>
                    </Message>
                </Grid.Column>

}

export default withRouter(Step1Preview);