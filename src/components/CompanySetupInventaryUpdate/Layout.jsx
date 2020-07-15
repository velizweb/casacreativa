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
                Actualizar elemento
            </Header>
            <Divider />
        </Grid.Column>
            <Grid.Column width={4}>
                
                <label>Nombre del elemento</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='item_name'
                    value={props.Item.item_name}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
                
                <Button type='submit' positive fluid>Aplicar</Button>
              
            </Grid.Column>
           
        </Grid>


        </Form>
        </div>
					
  );
}

export default withRouter(Layout);