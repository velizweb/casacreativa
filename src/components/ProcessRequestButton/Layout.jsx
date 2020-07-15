import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import { Label,Button,Modal } from 'semantic-ui-react'


function Layout(props) {

    const [modalVisile, setModalVisible] = useState(false)
    const [RequestStatus, setRequestStatus] = useState('')

    
    function OpenModal(){
        setModalVisible(true)
    }

    function CancelModal(){
        setModalVisible(false)
    }

    function set_request_status(request_status){
        setRequestStatus(request_status)
        OpenModal()

    }


    function process_request(){

        setModalVisible(false)
        props.process_request(RequestStatus)
    }

    return (
            <Button.Group size='mini'>
                <Button color='green' onClick={()=>set_request_status('Aprovate')}>Aprovate</Button>
                <Button.Or />
                <Button negative onClick={()=>set_request_status('Denegate')}>Denegate</Button>

                <Modal size={'mini'} open={modalVisile}  style={{position:'relative'}}>
                <Modal.Header>Update request</Modal.Header>
                <Modal.Content>
                    Are you sure you want to <Label>{RequestStatus}</Label> this request?
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={()=>CancelModal()}>No</Button>
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content='Yes'
                        onClick={()=>process_request()}
                    />
                </Modal.Actions>
            </Modal>

            </Button.Group>


  );
}

export default withRouter(Layout);