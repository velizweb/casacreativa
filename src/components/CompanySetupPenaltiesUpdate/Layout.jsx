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
                Actualizar configuracion de la multa
            </Header>
            <Divider />
        </Grid.Column>
            <Grid.Column width={4}>
                
                <label>Nombre de la multa</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='...'
                    name='penaltie_name'
                    value={props.Penaltie.penaltie_name}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                <label>Cargo</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='$ 0,00'
                    name='charge'
                    value={props.Penaltie.charge}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
            </Grid.Column>
            <Grid.Column width={6}>

            <Grid>
                <Grid.Column width={8}>
                    
                <label>Habilitado</label>
                <Button.Group>
                    <Button 
                        negative={(props.PenaltieEnable === 0 ) ? true : false}
                        type={'button'}
                        onClick={()=>props.publishPenaltie(0)}>No</Button>
                    <Button.Or />
                    <Button 
                        positive={(props.PenaltieEnable ===1 ) ? true : false}
                        type={'button'} 
                        onClick={()=>props.publishPenaltie(1)}>Si</Button>
                </Button.Group>
                <Divider />
                <Button type='submit' positive fluid>Actualizar multa</Button>

          

                </Grid.Column>
               

            </Grid>

            

                
            </Grid.Column>
        </Grid>


        </Form>
        </div>
					
  );
}

export default withRouter(Layout);