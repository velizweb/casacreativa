import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Icon,Button,Loader,Grid,Select, Form, Input } from 'semantic-ui-react'
import GuiHeader from'../../gui/GuiHeader'

function Layout(props) {

    if(props.getting){
        return <Loader active inline='centered' />
    }

    return <Form size={'small'} onSubmit={props.handleSubmit}>
    <Grid>
    <Grid.Row>
        <Grid.Column  width={16}>
            <GuiHeader
                header_text={'Detalle de elementos del room'}
            />
            
        </Grid.Column>

        <Grid.Column  width={6}>
           
            <Form.Field
                        control={Select}
                        options={props.DataSystemInventary}
                        label={{ children: 'Seleccionar', htmlFor: 'form-select-control-systemInventary' }}
                        placeholder='Room'
                        search
                        searchInput={{ id: 'form-select-control-systemInventary' }}
                        value={props.Item.item_name}
                        name='item_name'
                        onChange={(e,{ value,name,test }) => props.handleChange( value, name, test ) }
                    />
        </Grid.Column>
        <Grid.Column width={3}>
                <label>Existencia</label>
                <Input  
                    fluid
                    control='input'
                    placeholder='1'
                    name='existence'
                    value={props.Item.existence || ''}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

            </Grid.Column>

            <Grid.Column width={4}>
                <br/>
                <Button type='submit' positive fluid>Aplicar</Button>

            </Grid.Column>

    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
            <Table color={'green'}>
				<Table.Header>
					<Table.Row>
                        <Table.HeaderCell>Identificador</Table.HeaderCell>
                        <Table.HeaderCell>Existencia</Table.HeaderCell>
                        <Table.HeaderCell>Opciones</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
								
                {props.data.map((item, key)=>{
                    return (<Table.Row key={key}>
                        <Table.Cell>{item.item_name}</Table.Cell>
                        <Table.Cell>{item.existence}</Table.Cell>
                        <Table.Cell>
                            <Button animated size='small' negative type='button'
                            onClick={()=>props.deleteItem(item.id)}>
                            <Button.Content visible>Eliminar</Button.Content>
                                <Button.Content hidden >
                                    <Icon name='trash' />
                                </Button.Content>
                            </Button>
                        </Table.Cell>
                    </Table.Row>)            
                })
            }

                </Table.Body>
			</Table>
        </Grid.Column>
    </Grid.Row>
</Grid>
</Form>

}

export default withRouter(Layout);