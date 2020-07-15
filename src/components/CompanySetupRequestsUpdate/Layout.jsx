import React from 'react';
import { withRouter } from 'react-router-dom'
import { Grid,Form,Header,Divider,Button,Input,Loader } from 'semantic-ui-react'

function Layout(props) {

    if(props.loading){
        return (<Loader active inline='centered' />)
    }


    return (
        <div>                  
        <Form size={'small'} onSubmit={props.handleSubmit}>

        <Grid>
        <Grid.Column width={16}>
            <Header as='h2'>
                Actualizar configuracion de la solicitud
            </Header>
            <Divider />
        </Grid.Column>
            <Grid.Column width={4}>
                
                <label>Nombre de la solicitud</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='...'
                    name='request_name'
                    value={props.Request.request_name}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                <label>Cargo</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='$ 0,00'
                    name='charge'
                    value={props.Request.charge}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
            </Grid.Column>
            <Grid.Column width={6}>

            <Grid>
                <Grid.Column width={8}>
                    
                <label>Habilitado</label>
                <Button.Group>
                    <Button 
                        negative={(props.RequestEnable===0) ? true : false}
                        type={'button'}
                        onClick={()=>props.publishRequest(0)}>No</Button>
                    <Button.Or />
                    <Button 
                        positive={(props.RequestEnable===1) ? true : false}
                        type={'button'} 
                        onClick={()=>props.publishRequest(1)}>Si</Button>
                </Button.Group>
                <Divider />
                <Button type='submit' positive fluid>Actualizar solicitud</Button>

          

                </Grid.Column>
               

            </Grid>

            

                
            </Grid.Column>
        </Grid>


        </Form>
        </div>
					
  );
}

export default withRouter(Layout);