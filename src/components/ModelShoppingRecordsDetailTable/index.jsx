import React from 'react'
import { Table } from 'semantic-ui-react'

function index(props){

    function get_total(data){
        let total = 0;
        props.data.map((item, key)=>{
              total+= item.amount
              return true
        })

        return total;
  }

      return <div>
          <h3>Total : COP {parseFloat(get_total(props.data)).toLocaleString()}</h3>
        
      <Table color={'green'} compact='very' style={{fontSize:'0.8em'}} celled striped >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Cod</Table.HeaderCell>
          <Table.HeaderCell>Producto</Table.HeaderCell>
          <Table.HeaderCell>P/U</Table.HeaderCell>
          <Table.HeaderCell>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
          <Table.HeaderCell>Fecha</Table.HeaderCell>
              
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
              {
                  props.data.map((item,key)=>{
                      return(
                  <Table.Row key={'srecord-'+key}>
                      <Table.Cell>
                          {item.shopping_records_id}
                      </Table.Cell>
                      <Table.Cell>
                          {item.product}
                      </Table.Cell>
                      <Table.Cell>
                          COP {parseFloat(item.unit_price).toLocaleString()}
                      </Table.Cell>
                      <Table.Cell>
                          {parseFloat(item.qty).toLocaleString()}
                      </Table.Cell>
                      <Table.Cell>
                          COP {parseFloat(item.amount).toLocaleString()}
                      </Table.Cell>
                      <Table.Cell>
                          {item.created_at}
                      </Table.Cell>
                  </Table.Row>
                      )
                    })
              }
      </Table.Body>
    </Table>
                    </div>
}

export default index