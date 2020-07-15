import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Label,Button,Loader,Message } from 'semantic-ui-react'
import ProcessRequestButton from '../ProcessRequestButton/Component'

function Layout(props) {

    function open_employee(user_id){
        props.history.push('/employee/detail/'+props.match.params.company_id+'/'+user_id)
	}

    if(props.loading){
        return (<Loader active inline='centered' />)
    }


    return (
        <div>

    <Button.Group widths='5'>
      
            <Button as='div' labelPosition='right' className='mr-3'>
            <Button primary onClick={()=>props.setFilter('New')}>
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
                                    <Table.HeaderCell>Empleado</Table.HeaderCell>
                                    <Table.HeaderCell>Solicitud</Table.HeaderCell>
                                    <Table.HeaderCell>Cargo</Table.HeaderCell>
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
                                    <span 
                                    onClick={()=>open_employee(item.user_id)}
                                    style={{fontSize:'.8em',textDecoration:'underline',cursor:'pointer'}}>
                                        {item.full_name}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span style={{fontSize:'.8em'}}>
                                        {item.request_name}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    {(item.charge) ? <b>{item.charge}</b> : 
                                    <span style={{fontSize:'.8em',color:'#e8e8e8'}}>N/A</span>}
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


                                        {(item.request_status==='New') && 
                                            <ProcessRequestButton 
                                            selected_request = {item}
                                            callBack={props.getRequests}
                                            />
                                        }

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