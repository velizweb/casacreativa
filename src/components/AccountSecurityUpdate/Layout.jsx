import React from 'react';
import { withRouter } from 'react-router-dom'
import NoItems from '../NoItems/Component';
import { Form,Divider,Button,Loader,Grid,Input,Header } from 'semantic-ui-react'

function Layout(props) {



    if(props.created){
        return <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row style={{height: '80vh'}}>
                <Grid.Column>
                    <NoItems
                        title='Tus datos fueron actualizados con exito'
                        firstButtonText={'Volver al home'}
                        firstPage={'/'}
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
                Seguridad
            </Header>
            <p>Actualiza tus datos de acceso al sistema, elije una clave segura para mantener un mayor nivel de seguridad.</p>
            <Divider />
        </Grid.Column>
          
            <Grid.Column width={16}>

            <label>Correo electronico</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='email'
                    value={props.AccountInfo.email}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />


            <label>Clave actual</label>
                <Input
                    style={{marginBottom:'1em'}}
                    type='password'
                    fluid
                    control='input'
                    placeholder='********'
                    name='old_password'
                    value={props.AccountInfo.old_password}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                <label>Nueva clave de acceso</label>
                <Input
                    type='password'
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='********'
                    name='password'
                    value={props.AccountInfo.password}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                <label>Repite la nueva clave de acceso</label>
                <Input
                    type='password'
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='********'
                    name='password2'
                    value={props.AccountInfo.passsword2}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
                


                <Button type='submit' positive fluid>Aplicar</Button>

            </Grid.Column>
        </Grid>


        </Form>
        </div>)
}

export default withRouter(Layout);