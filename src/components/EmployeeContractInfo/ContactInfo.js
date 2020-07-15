import React from 'react';
import {Divider,List } from 'semantic-ui-react'


function ContactInfo(props) {

    if (!props.Employee){
        return '';
    }

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
        },
        {
            key : 'housing_address',
            label: 'Direccion de vivienda'
        },

        
    ]


  
    return <div>
            <h3 className='text-dark'>Contacto</h3>
                <List> 
                {
                        validate_keys.map((item, key)=>{
                            if(props.Employee[item.key] !==null){

                                return (
                                    <List.Item key={key}>
                                        <span>{item.label} : </span>
                                        <br/>
                                        <span style={{fontSize:'.9em'}}> {props.Employee[item.key]}</span>
                                        <Divider />
                                    </List.Item>
                                )
                            } // endif
                            return true
                        })
                    }

                </List>
            </div>


}

export default ContactInfo;