import React, {useState,useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import {Grid,Message,List,Divider } from 'semantic-ui-react'


function Step1_preview(props) {


    const [validate_keys] = useState([
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
    ])

    const [ items,updateItems ] = useState([])
    
    useEffect(()=>{
        
        let result = [];
        validate_keys.map((item, key)=>{
            result.push(item.label)
            return true
        })

        updateItems(result)
    },[validate_keys])

  

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
                                        <br/>
                                        {props.Employee[item.key]}
                                        <Divider/>
                                    </List.Item>
                                )
                            } // endif
                            return true
                        })
                    }

            </List>
        </Grid.Column>
    }


        
            return <Grid.Column width={8}>
                    <Message>
                        <Message.Header>Provea esta informacion</Message.Header>
                        <Message.List items={items} />
                    </Message>
                </Grid.Column>

}

export default withRouter(Step1_preview);