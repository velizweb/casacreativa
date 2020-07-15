import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'


function Layout(props) {


  function readTotal(){
		
		let result = 0;
		
		props.data.map((item,key)=>{
			result += item.amount;
			return true;
		})

		return result
	}

  return <div>

	<p>Total : { readTotal() } </p>

      	<Table color={'green'}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Fecha</Table.HeaderCell>
					<Table.HeaderCell>Product</Table.HeaderCell>
					<Table.HeaderCell>P/U</Table.HeaderCell>
					<Table.HeaderCell>Cantidad</Table.HeaderCell>
					<Table.HeaderCell>Total</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{ props.data.map((item, key)=>{
					return (
						<Table.Row key={'active'+key}>
							<Table.Cell>{item.created_at}</Table.Cell>
							<Table.Cell>{item.product}</Table.Cell>
							<Table.Cell>{item.unit_price}</Table.Cell>
							<Table.Cell>{item.qty}</Table.Cell>
							<Table.Cell>{item.amount}</Table.Cell>
						</Table.Row>
					)
				})}
			</Table.Body>
      	</Table>
	</div>
  
}

export default withRouter(Layout);