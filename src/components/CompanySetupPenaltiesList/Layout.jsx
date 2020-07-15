import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Icon,Label,Button,Loader,Grid } from 'semantic-ui-react'
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
                        title='No hay multas registradas'
                        message='Agrega una nueva multa para mostrar la informacion'
                        firstButtonText={'Crear multa'}
                        firstPage={'/company/setup/employees-penalties/create/'+props.company_id}
                        />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    }

    return <Grid>
    <Grid.Row>
        <Grid.Column>
            <GuiHeader
                header_text={'Configuracion de multas'}
                button_text={'Nueva multa'}
                header_sub_text={'Loren ipsun dolor site amet'}
                page={'/company/setup/employees-penalties/create/'+props.company_id}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
            <Table color={'green'}>
				<Table.Header>
					<Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Cargo</Table.HeaderCell>
                        <Table.HeaderCell>Estatus</Table.HeaderCell>
                        <Table.HeaderCell>Opciones</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
								
                {props.data.map((item, key)=>{
                    return (<Table.Row key={key}>
                        <Table.Cell>{item.penaltie_name}</Table.Cell>
                        <Table.Cell>{(item.charge) ? item.charge : 'n/a'}</Table.Cell>
                        <Table.Cell>
                            {(item.enable) ? <Label color='green' horizontal as='a'>Habilitado</Label> : <Label color='red' horizontal as='a'>Deshabilitado</Label>}
                        </Table.Cell>
                        <Table.Cell>
                            <Button animated size='small' positive
                            onClick={()=>handleItemClick(
                                '/company/setup/employees-penalties/update/'+props.match.params.company_id+'/'+item.id
                                )}>
                            <Button.Content visible>Actualizar</Button.Content>
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