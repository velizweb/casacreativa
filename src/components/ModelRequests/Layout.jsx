import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

function Layout(props) {

  function readTotal(){
		
		let result = 0;
		
		props.data.map((item,key)=>{
			result += item.charge;
			return true
		})

		return result
	}


    return ( <div>
	
      <p>Total : { readTotal() } </p>

      	<Table color={'green'}>
      		<Table.Header>
	        		<Table.Row>
    					<Table.HeaderCell>Fecha {props.data.created_at}</Table.HeaderCell>
          				<Table.HeaderCell>Solicitud</Table.HeaderCell>
          				<Table.HeaderCell>Cargo</Table.HeaderCell>
        			</Table.Row>
      		</Table.Header>
      		<Table.Body>
			{ props.data.map((item, key)=>{
				return (
					<Table.Row key={'active'+key}>
					<Table.Cell>{item.created_at}</Table.Cell>
					<Table.Cell>{item.request_name}</Table.Cell>
					<Table.Cell>{item.charge}</Table.Cell>
				</Table.Row>
				)
			})}
  			</Table.Body>
      	</Table>
	</div>
  );

}

export default withRouter(Layout);