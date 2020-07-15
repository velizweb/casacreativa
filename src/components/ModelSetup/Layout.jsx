import React from 'react';
import { withRouter } from 'react-router-dom'
import { Grid,Form,Header,Divider,Input,Select,Loader,Button } from 'semantic-ui-react'



function Layout(props) {

    if(props.loading){
        return (<Loader active inline='centered' />)
    }


    return (
        <div>                  
        <Form size={'small'} onSubmit={props.applyContractSetup}>

        <Grid>
        <Grid.Column width={16}>
            <Header as='h2'>
                Configuracion de modelo
            </Header>
            <Divider />
        </Grid.Column>
            
            <Grid.Column width={3}>
                
                <label>Retefuente</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='Retencion de la fuente'
                    name='rtf'
                    value={props.ContractInfo.rtf}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <label>% Contrato</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='%'
                    name='contract'
                    value={props.ContractInfo.contract}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
            </Grid.Column>

            <Grid.Column width={3}>
                <label>Meta</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='0.00'
                    name='meta'
                    value={props.ContractInfo.meta}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

            </Grid.Column>

            <Grid.Column width={4}>
                <Form.Field
                        control={Select}
                        options={props.DataSystemRooms}
                        label={{ children: 'Seleccionar', htmlFor: 'form-select-control-room' }}
                        placeholder='Room'
                        search
                        searchInput={{ id: 'form-select-control-room' }}
                        value={props.ContractInfo.system_rooms_id}
                        name='system_rooms_id'
                        onChange={(e,{ value,name,test }) => props.handleChange( value, name, test ) }
                    />

            </Grid.Column>

            <Grid.Column width={4}>
                <br/>
                <Button type='submit' positive fluid>Aplicar</Button>

            </Grid.Column>
            
        </Grid>


        </Form>
        </div>
					
  );
}

export default withRouter(Layout);