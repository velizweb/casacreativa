import React from 'react';
import { withRouter } from 'react-router-dom'
import NoItems from '../NoItems/Component';
import { Form,Divider,Button,Loader,Grid,Input,Header } from 'semantic-ui-react'

function Layout(props) {

    if(props.loading){
        return (<Loader active inline='centered' />)
    }

    if(props.created){
        return <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row style={{height: '80vh'}}>
                <Grid.Column>
                    <NoItems
                        title='Estudio creado con exito'
                        message='Escoje una opcion'
                        firstButtonText={'Volver a la lista'}
                        firstPage={'/companies-list'}
                        secondButtonText={'Crear otro estudio'}
                        secondPage={'/companies-create'}
                        secondCallback={props.resetStates}
                        />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    }

    return (
        <div>                  
        <Form size={'small'} onSubmit={props.handleSubmit}>

        <Grid>
        <Grid.Column width={16}>
            <Header as='h2'>
                Nuevo estudio
            </Header>
            <Divider />
        </Grid.Column>
          
            <Grid.Column width={4}>

                <h3>Datos del estudio</h3>

                <label>Nombre del estudio</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='Estudio Example Name'
                    name='company_name'
                    value={props.CompanyData.company_name}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                <label>Direccion</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='Medellin'
                    name='address'
                    value={props.CompanyData.address}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
                <label>Email</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='example@email'
                    name='company_email'
                    value={props.CompanyData.company_email}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                <label>Telefono primario</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='000 0000 000'
                    name='company_primary_phone'
                    value={props.CompanyData.company_primary_phone}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
    
                <label>Telefono secundario</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='000 0000 000'
                    name='company_secondary_phone'
                    value={props.CompanyData.company_secondary_phone}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />


                <Button type='submit' positive fluid>Crear</Button>

            </Grid.Column>
            <Grid.Column width={4}>

            <h3>Datos del administrador</h3>

            <label>Correo del administrador</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='example@email'
                    name='user_email'
                    value={props.CompanyData.user_email}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
                
                <label>Clave de usuario</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    type='password'
                    control='input'
                    placeholder='*******'
                    name='user_password'
                    value={props.CompanyData.user_password}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
    
                <label>Repita la clave del usuario</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='*******'
                    name='user_confirm_password'
                    value={props.CompanyData.user_confirm_password}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />


                <label>Nombres del usuario</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='user_first_name'
                    value={props.CompanyData.primary_phone}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
    
                <label>Apellidos del usuario</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='user_last_name'
                    value={props.CompanyData.secondary_phone}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

            <Grid>
                <Grid.Column width={8}>
               

                </Grid.Column>
            </Grid>
            </Grid.Column>
                
        </Grid>


        </Form>
        </div>)
}

export default withRouter(Layout);