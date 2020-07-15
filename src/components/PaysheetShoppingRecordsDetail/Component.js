import React,{useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import PaySheetContext from '../../Contexts/PaySheetContext'
import PaySheetItemsSelector from '../PaySheetItemsSelector/Component'

function PaySheetShoppingRecordsDetail(props) {

    const PaySheetDetails = useContext(PaySheetContext)
    const { setPaySheetDetails } = useContext(PaySheetContext)
    
    
    function handleClick(collection,compare_item){
        if(parseInt(props.paid) === 0){
            setPaySheetDetails(PaySheetItemsSelector(collection, PaySheetDetails, compare_item))
        }
    }

    function isSelected(compare_item){
        
        
        let style = {}

        PaySheetDetails.shoppingRecords.map((item, key)=>{
            
            if(compare_item.id === item ){
                style = {backgroundColor:'green',color:'white' }
            }
            
            return true;
        })

        return style;
    }


     return <div>
    

    <Table celled striped color='green' style={{fontSize:'.7em'}} compact='very'>
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
                props.ShoppingRecords.map((item,key)=>{
                    return(
                <Table.Row key={'shopping-records-item-'+key}
                    onClick={()=>handleClick('shoppingRecords', item)}
                    style={isSelected(item)}
                >
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

export default withRouter(PaySheetShoppingRecordsDetail);