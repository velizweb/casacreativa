import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Icon,Button,Loader,Grid } from 'semantic-ui-react'
import NoItems from '../NoItems/Component';
import GuiHeader from'../../gui/GuiHeader'

function Layout(props) {

	function handleItemClick(page){
        props.history.push(page)
	}

    if(props.getting){
        return <Loader active inline='centered' />
    }

    if(!props.getting && props.data.length < 1){
        return <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row style={{height: '80vh'}}>
                <Grid.Column>
                    <NoItems
                        title='No hay Rooms registrados aun'
                        message='Registra un nuevo Room'
                        firstButtonText={'Nuevo Room'}
                        firstPage={'/company/rooms/create/'+props.company_id}
                        />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    }

    return <Grid>
    <Grid.Row>
        <Grid.Column>
            <GuiHeader
                header_text={'Configuracion de rooms'}
                button_text={'Nuevo room'}
                page={'/company/rooms/create/'+props.company_id}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
            <Table color={'green'}>
				<Table.Header>
					<Table.Row>
                        <Table.HeaderCell>Identificador</Table.HeaderCell>
                        <Table.HeaderCell>Opciones</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
								
                {props.data.map((item, key)=>{
                    return (<Table.Row key={key}>
                        <Table.Cell>{item.room_identificator}</Table.Cell>
                        <Table.Cell>
                            <Button animated size='small' positive
                            onClick={()=>handleItemClick(
                                '/company/rooms/update/'+props.match.params.company_id+'/'+item.id
                                )}>
                            <Button.Content visible>Actualizar</Button.Content>
                                <Button.Content hidden >
                                    <Icon name='folder open' />
                                </Button.Content>
                            </Button>

                            <Button animated size='small' positive
                            onClick={()=>handleItemClick(
                                '/company/rooms/detail/'+props.match.params.company_id+'/'+item.id
                                )}>
                            <Button.Content visible>Detalle</Button.Content>
                                <Button.Content hidden >
                                    <Icon name='folder open' />
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

}

export default withRouter(Layout);