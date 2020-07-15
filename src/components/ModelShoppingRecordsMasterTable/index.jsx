import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

function index(props){

      

      return <div>
            
      <Table color={'green'} compact='very' style={{fontSize:'0.8em'}} celled striped>
      <Table.Header>
            <Table.Row>
                  <Table.HeaderCell>Fecha</Table.HeaderCell>
                  <Table.HeaderCell>Total</Table.HeaderCell>
                  <Table.HeaderCell>Detalle</Table.HeaderCell>
            </Table.Row>
      </Table.Header>
      <Table.Body>
                  { props.data.map((item, key) => {
                        
                        return	<Table.Row key={'active'+key}>
                                    <Table.Cell>{item.created_at}</Table.Cell>
                                    <Table.Cell>{item.amount}</Table.Cell>
                                    <Table.Cell>
                                          <span style={{cursor:'pointer'}} onClick={()=>props.onOpenItem(item)}>
                                                <Icon name='folder open' />
                                          </span>
                                    </Table.Cell>
                              </Table.Row>
            
                  })}
            </Table.Body>
      </Table>
            </div>
}

export default index