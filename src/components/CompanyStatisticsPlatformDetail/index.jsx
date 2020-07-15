import React,{useContext} from 'react'
import { Table, Segment } from 'semantic-ui-react'
import StatisticsContext from '../../Contexts/StatisticsContext'

function Index(props){

      const StatisticsDetail = useContext(StatisticsContext)

      const LivejasminDetail = ()=>{
            
           

                  return <div>
                  <h1>LiveJasmin</h1>
            
                  <Table color={'green'} compact='very' >
                        <Table.Header>
                              <Table.Row>
                                    <Table.HeaderCell>Cuenta</Table.HeaderCell>
                                    <Table.HeaderCell>Total</Table.HeaderCell>
                              </Table.Row>
                        </Table.Header>
                        <Table.Body>
                              { StatisticsDetail.livejasmin.detail.map((item, key) => {
                                    return(
                                          <Table.Row key={'active'+key}>
                                    <Table.Cell>{ item.model }</Table.Cell>
                                    <Table.Cell>USD { item.earnings_format }</Table.Cell>
                                    </Table.Row>)
                              })}
                        </Table.Body>
                  </Table>
            </div>
            
           
      }

      
      
      const ChaturbateDetail = ()=>{
            
            return <Segment>
                  <h4>Chaturbate</h4>
                  <Table color={'green'} compact='very'>
                        <Table.Header>
                              <Table.Row>
                                    <Table.HeaderCell>Cuenta</Table.HeaderCell>
                                    <Table.HeaderCell>Total</Table.HeaderCell>
                              </Table.Row>
                        </Table.Header>
                        <Table.Body>
                              { StatisticsDetail.chaturbate.detail.map((item, key) => {
                              return(
                                    <Table.Row key={'active'+key}>
                                    <Table.Cell>{item.model}</Table.Cell>
                                    <Table.Cell>USD {item.earnings_format}</Table.Cell>
                                    </Table.Row>)
                              })}
                        </Table.Body>
                  </Table>
            </Segment>
     
      }


      return <div>
                  { StatisticsDetail.livejasmin.detail.length > 0 && <LivejasminDetail /> }
                  { StatisticsDetail.chaturbate.detail.length > 0 && <ChaturbateDetail /> }
            </div>
}

export default Index;