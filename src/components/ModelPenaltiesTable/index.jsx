import React from 'react'
import { Table } from 'semantic-ui-react'

function index(props){

      return <Table color={'green'}>
      <Table.Header>
            <Table.Row>
                  <Table.HeaderCell>Fecha</Table.HeaderCell>
                  <Table.HeaderCell>Multa</Table.HeaderCell>
                  <Table.HeaderCell>Cargo</Table.HeaderCell>
            </Table.Row>
      </Table.Header>
      <Table.Body>
                  { props.data.map((item, key) => {
                  
                  return	<Table.Row key={'active'+key}>
                              <Table.Cell>{item.created_at}</Table.Cell>
                              <Table.Cell>{item.penaltie_name}</Table.Cell>
                              <Table.Cell>{item.charge}</Table.Cell>
                              </Table.Row>
            
                  })}
            </Table.Body>
      </Table>
}

export default index