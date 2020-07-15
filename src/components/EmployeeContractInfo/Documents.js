import React from 'react';
import { withRouter } from 'react-router-dom'
import Env from '../../Env'
import {Grid,List,Label,Icon } from 'semantic-ui-react'


function Documents(props) {

 
  if (!props.Employee){
    return '';
  }

  function openFile(file){
    window.open(Env.storage_uri(file), '_blank')
  }


    return <Grid.Column width={4}>

<Grid.Column width={4}>
    <h3 className='text-dark'>Documentos</h3>
</Grid.Column>

<Grid.Column width={12}>

<List className='mt-3'>
    <List.Item className='text-dark'>
        <List.Header>Identificacion</List.Header>
    </List.Item>
    
    <List.Item className='text-dark'>

      <List.Content>
        <Label as='a' basic onClick={()=>openFile(props.Employee.front_id_card)}>
          <Icon name='folder' color='green' /> Frente
        </Label>
        
      </List.Content>
    </List.Item>

    <List.Item className='text-dark'>
      <List.Content>
      <Label as='a' basic onClick={()=>openFile(props.Employee.reverse_id_card)}>
          <Icon name='folder' color='green' /> Reverso
        </Label>
      </List.Content>
    </List.Item>

    <List.Item className='text-dark'>
      <List.Content>
      <Label as='a' basic onClick={()=>openFile(props.Employee.on_hand_id_card)}>
          <Icon name='folder' color='green' /> Cedula en mano
        </Label>
      </List.Content>
    </List.Item>
    
    <List.Item className='text-dark'>
      <List.Content>
      <Label as='a' basic onClick={()=>openFile(props.Employee.front_reverse_id_card)}>
          <Icon name='folder' color='green' /> Frente y reverso
        </Label>
      </List.Content>
    </List.Item>
  
  </List>

  <List className='mt-3'>



    
    <List.Item className='text-dark'>
        <List.Header>Otros documentos</List.Header>
    </List.Item>
    

    <List.Item className='text-dark'>
      <List.Content>
      <Label as='a' basic>
          <Icon name='folder' color='green' /> Mas documentos
        </Label>
      </List.Content>
    </List.Item>

  
  </List>




</Grid.Column>
</Grid.Column>
        

        

}

export default withRouter(Documents);