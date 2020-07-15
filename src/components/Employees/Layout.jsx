import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Icon,Label,Button,Loader,Modal,Header,Grid } from 'semantic-ui-react'
import GuiHeader from'../../gui/GuiHeader'
import FilerInput from '../FilerInput/Component'

function Layout(props) {

    const [modalVisile, setModalVisible] = useState(false)
    const [toDelete, setTodelete] = useState(false)

	function handleButtonClick(user_id){
        props.history.push('/company/employees/update/'+props.match.params.company_id+'/'+user_id)
    }
    
    function open_employee(user_id){
        props.history.push('/company/employee/detail/'+props.match.params.company_id+'/'+user_id)
	}

    if(props.loading){
        return (<Loader active inline='centered' />)
    }



    function openModal(company_id, employee_id,){
        
        setTodelete({
            company_id,
            employee_id
        })
        setModalVisible(true)
        console.log(company_id)
        console.log(employee_id)
    }

    function closeModal(){
        setModalVisible(false)
    }

    function deleteEmployee(){
        setModalVisible(false)
        props.deleteEmployee(toDelete.company_id,toDelete.employee_id)
    }


    function render_roles(data){

        const roles  = ['Super admin','Admin','Monitor','Model']
        let user_id = null
        let rolStatus = {
            'Super admin': false,
            'Admin': false,
            'Monitor': false,
            'Model':false
        }

        roles.map((i, key)=>{
            
            data.map((item,item_key)=>{
                user_id = item.user_id

                if(i === item.user_type){
                    rolStatus = {
                        ...rolStatus,
                        [i]: true
                    }
                }
                return true
            })
            return true
        })
        
        if(rolStatus["Super admin"]){
            return (

                <Label as='a' color='green' basic>
                    <Icon name='checkmark' /> Super admin
				</Label>
                
                )
        }

        return(
            <div>
                {(rolStatus.Admin) ? 
                <Label as='a' color='green' basic onClick={()=>props.setRol(user_id,'Admin')}>
                    <Icon name='checkmark' /> Admin
				</Label>:
                <Label color='grey' as='a' basic onClick={()=>props.setRol(user_id,'Admin')}>
                    <Icon name='times' /> Admin
                </Label>}
                
                {(rolStatus.Monitor) ? <Label as='a' color='green' basic onClick={()=>props.setRol(user_id,'Monitor')}>
                <Icon name='checkmark' /> Monitor
				</Label>:
                <Label color='grey' as='a' basic onClick={()=>props.setRol(user_id,'Monitor')}>
                   <Icon name='times' /> Monitor
                </Label>}
                
                {(rolStatus.Model) ? <Label as='a' color='green' basic onClick={()=>props.setRol(user_id,'Model')}>
                <Icon name='checkmark' /> Modelo
				</Label>:
                <Label color='grey' as='a' basic onClick={()=>props.setRol(user_id,'Model')}>
                   <Icon name='times' /> Modelo
                </Label>}
                
                <Button animated size='small' positive className="ml-3"
                    onClick={()=>handleButtonClick( user_id )}
                    >
                    <Button.Content visible>Update</Button.Content>
                    <Button.Content hidden >
                        <Icon name='pencil' />
                    </Button.Content>
                </Button>

                <Button animated size='small' negative className="ml-3"
                    onClick={()=>openModal(props.match.params.company_id , user_id )}
                    >
                    <Button.Content visible>Borrar</Button.Content>
                    <Button.Content hidden >
                        <Icon name='trash' />
                    </Button.Content>
                </Button>
                
            </div>
        )
    }



    return <Grid>
    <Grid.Row>
        <Grid.Column>
            <GuiHeader
                button_text={'Nuevo empleado'}
                header_text={'Administracion de empleados'}
                header_sub_text={'Loren ipsun dolor site amet'}
                page={'/company/employees/create/'+props.company_id}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
        <FilerInput 
          Filter={props.Filter} 
          handleChange={props.handleChangeFilter}
        />

                        <Table color={'green'} selectable compact='very'>
								<Table.Header>
								<Table.Row>
                                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                                    <Table.HeaderCell>Correo</Table.HeaderCell>
                                    <Table.HeaderCell>Telefono</Table.HeaderCell>
                                    <Table.HeaderCell>Roles</Table.HeaderCell>
                                </Table.Row>
								</Table.Header>
								<Table.Body>
								
                        {props.data.map((item, key)=>{
                            return (<Table.Row key={key}>
                                <Table.Cell>

                                    <span 
                                    onClick={()=>open_employee(item.id)}
                                    style={{fontSize:'.8em',textDecoration:'underline',cursor:'pointer'}}>
                                        <Icon name='folder' />
                                        {item.first_name} {item.last_name}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span style={{fontSize:'.8em'}}>
                                        {item.email}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span style={{fontSize:'.8em'}}>
                                        {item.primary_phone}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    {render_roles(item.company_users)}
                                </Table.Cell>
                            </Table.Row>)
                            
                        })
                    }

                        </Table.Body>
					</Table>


                    <Modal open={modalVisile} basic size='small' style={{position:'relative'}}>
                        <Header icon='archive' content='Delete employee' />
                        <Modal.Content>
                        <p>
                            Estas seguro de querer eliminar este empleado?
                        </p>
                        </Modal.Content>
                        <Modal.Actions>
                        <Button basic color='red' inverted onClick={()=>closeModal()}>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' inverted onClick={()=>deleteEmployee()}>
                            <Icon name='checkmark' /> Yes
                        </Button>
                        </Modal.Actions>
                    </Modal>
        </Grid.Column>
    </Grid.Row>
</Grid>

}

export default withRouter(Layout);