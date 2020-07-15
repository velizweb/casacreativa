import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Label, Icon } from 'semantic-ui-react'

function Layout(props) {

    return (
	<div>
	
  <Table>
        
        <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Platform</Table.HeaderCell>
              <Table.HeaderCell>Nickname sugerido</Table.HeaderCell>
              <Table.HeaderCell>Nickname</Table.HeaderCell>
          <Table.HeaderCell>Password</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        <Table.Body>
      
          {
            props.RequestDetail.map((item, key) =>{
      
            return <Table.Row key={key}>
              <Table.Cell>
                <Label ribbon color={'red'}>
                    <Icon disabled name='video camera' /> {item.platform}</Label>
              </Table.Cell>
                <Table.Cell>{item.suggested_nickname}</Table.Cell>
            <Table.Cell>
              {( item.nickname ) ? <Label size='small' color='green'>
              <Icon name='check' />
              {item.nickname}</Label> : <Label size='mini' color='red'>
               En espera
              </Label>}
            </Table.Cell>
            <Table.Cell>
            {( item.password ) ? <Label size='small' color='green'>
              <Icon name='check' />
              {item.password}
            </Label> : <Label size='mini' color='red'>
               En espera
              </Label>}
              
            </Table.Cell>
            </Table.Row>
      
          })
        }
        </Table.Body>
        </Table> 
	</div>
  );
}

export default withRouter(Layout);