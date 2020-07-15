import React from 'react';
import { withRouter } from 'react-router-dom'
import {Grid,List } from 'semantic-ui-react'


function Step3_preview(props) {

 
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
      {(props.FrondIdCard.length) ? <List.Icon name='check' color='green'/> : <List.Icon name='warning' color='red'/>}
      <List.Content>Frente
      </List.Content>
    </List.Item>

    <List.Item className='text-dark'>
      {(props.ReverseIdCard.length) ? <List.Icon name='check' color='green'/> : <List.Icon name='warning' color='red'/>}
      <List.Content>Reverso
      </List.Content>
    </List.Item>
    
    
    <List.Item className='text-dark'>
      {(props.OnHandIdCard.length) ? <List.Icon name='check' color='green'/> : <List.Icon name='warning' color='red'/>}
      <List.Content>Cedula en mano
      </List.Content>
    </List.Item>

    <List.Item className='text-dark'>
      {(props.FrontReverseIdCard.length) ? <List.Icon name='check' color='green'/> : <List.Icon name='warning' color='red'/>}
      <List.Content>Frente y reverso
      </List.Content>
    </List.Item>

  </List>

  <List className='mt-3'>
    <List.Item className='text-dark'>
        <List.Header>Mas documentos</List.Header>
    </List.Item>
    
    <List.Item className='text-dark'>
      {(props.AvatarImage.length) ? <List.Icon name='check' color='green'/> : <List.Icon name='warning' color='red'/>}
      <List.Content>Imagen de perfil
      </List.Content>
    </List.Item>

    <List.Item className='text-dark'>
      {(props.OtherDocuments.length) ? <List.Icon name='check' color='green'/> : <List.Icon name='warning' color='red'/>}
      <List.Content>Mas documentos
      </List.Content>
    </List.Item>
  
  </List>




</Grid.Column>
</Grid.Column>
        

        

}

export default withRouter(Step3_preview);