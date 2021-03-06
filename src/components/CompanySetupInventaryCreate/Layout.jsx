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
                        title='Item registrado con exito'
                        message='Escoje una opcion'
                        firstButtonText={'Volver a la lista'}
                        firstPage={'/company/inventary/list/'+props.company_id}
                        secondButtonText={'Crear otro item'}
                        secondPage={'/company/inventary/create/'+props.company_id}
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
                Registrar nuevo item
            </Header>
            <Divider />
        </Grid.Column>
            <Grid.Column width={4}>
                
                <label>Identificador</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='item_name'
                    value={props.Item.item_name}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
 
                <Grid.Column width={16}>
                    <Button type='submit' positive fluid>Crear</Button>
                </Grid.Column>
            </Grid.Column>
           
        </Grid>


        </Form>
        </div>)
}

export default withRouter(Layout);