import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import {Grid,Message,List,Divider } from 'semantic-ui-react'


function Step2_preview(props) {


    const [validate_keys] = useState([
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

export default withRouter(Step2_preview);