import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Label,Button,Loader,Message,Icon } from 'semantic-ui-react'


function Layout(props) {


    if(props.loading){
        return (<Loader active inline='centered' />)
    }
    
    function handleItemClick(page){
        props.history.push(page)
	}

    return (
        <div>

    <Button.Group widths='5'>
      
            <Button as='div' labelPosition='right' className='mr-3'>
            <Button color='blue' onClick={()=>props.setFilter('New')}>
                Nuevas
            </Button>
            <Label as='a' basic  pointing='left'>
                0
            </Label>
            </Button>

            <Button as='div' labelPosition='right' className='mr-3'>
            <Button positive onClick={()=>props.setFilter('Aprovate')}>
                Aprobadas
            </Button>
            <Label as='a' basic pointing='left'>
                0
            </Label>
            </Button>

            <Button as='div' labelPosition='right' className='mr-3'>
                <Button color='red' onClick={()=>props.setFilter('Denegate')}>
                    Denegadas
                </Button>
                <Label as='a' basic  pointing='left'>
                    0
                </Label>
            </Button>
      
            <Button as='div' labelPosition='right' className='mr-3'>
            <Button onClick={()=>props.setFilter('Canceled')}>
                Canceladas
            </Button>
            <Label as='a' basic pointing='left'>
                0 
            </Label> 
            </Button>
            </Button.Group>

            {(props.data.length > 0 ) ? 

                        <Table color={'green'} selectable compact='very'>
								<Table.Header>
								<Table.Row>
                                    <Table.HeaderCell>Nº</Table.HeaderCell>
                                    <Table.HeaderCell>Creada</Table.HeaderCell>
                                    <Table.HeaderCell>Actualizada</Table.HeaderCell>
                                    <Table.HeaderCell>Estudio</Table.HeaderCell>
                                    <Table.HeaderCell>Modelo</Table.HeaderCell>
                                    <Table.HeaderCell>Estatus</Table.HeaderCell>
                                </Table.Row>
								</Table.Header>
								<Table.Body>
								
                        {props.data.map((item, key)=>{
                            return (<Table.Row key={key}>
                                <Table.Cell>
                                    <span style={{fontSize:'.8em'}}>
                                        {item.id}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span style={{fontSize:'.8em'}}>
                                        {item.created_at}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span style={{fontSize:'.8em'}}>
                                        {(item.updated_at===item.created_at) ? '----' : item.updated_at }
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span style={{fontSize:'.8em'}}>
                                        {item.company_name}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                        {item.full_name}
                                </Table.Cell>
                               
                                <Table.Cell>


                                        {(item.request_status==='New') && 
                                        <Label color='blue' size={'mini'} className='mr-3'>
                                            {item.request_status}
                                        </Label>}


                                        {(item.request_status==='Aprovate') 
                                        && <Label color='green' size={'mini'} className='mr-3'>
                                            {item.request_status}
                                        </Label>}


                                        {(item.request_status==='Denegate') 
                                        && <Label color='red' size={'mini'} className='mr-3'>
                                            {item.request_status}
                                        </Label>}

                                        {(item.request_status==='Canceled') 
                                        && <Label size={'mini'} className='mr-3'>
                                            {item.request_status}
                                        </Label>}

                                        <Button animated size='small' positive
                                    onClick={()=>handleItemClick(
                                        '/company/account/requests/detail/'+item.company_profile_id+'/'+item.model_id+'/'+item.id
                                        )}>
                                    <Button.Content visible>Abrir</Button.Content>
                                        <Button.Content hidden >
                                            <Icon name='folder open' />
                                        </Button.Content>
                                    </Button>

                                </Table.Cell>
                               
                            </Table.Row>)
                            
                        })
                    }

                        </Table.Body>
                    </Table> : 

                    <Message>
                    <Message.Header>No se encontraron solicitudes con este estatus</Message.Header>
                    <p>
                        Sin resultados.
                    </p>
                    </Message>
                }

                    </div>
  

  );
}

export default withRouter(Layout);