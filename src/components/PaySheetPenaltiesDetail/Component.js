import React,{useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import PaySheetContext from '../../Contexts/PaySheetContext'
import PaySheetItemsSelector from '../PaySheetItemsSelector/Component'

function PaySheetPenaltiesDetail(props) {

    const PaySheetDetails = useContext(PaySheetContext)
    const { setPaySheetDetails } = useContext(PaySheetContext)
    
    
    
    function handleClick(collection,compare_item){
        
        if(parseInt(props.paid) === 0){
            setPaySheetDetails(PaySheetItemsSelector(collection, PaySheetDetails, compare_item))
        }
    }

    function isSelected(compare_item){
        
        
        let style = {}

        PaySheetDetails.penalties.map((item, key)=>{
            
            if(compare_item.id === item ){
                style = {backgroundColor:'green',color:'white' }
            }
            
            return true;
        })

        return style;
    }


     return <div>
    
    <Table celled striped color='green' style={{fontSize:'.7em'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Descripcion</Table.HeaderCell>
        <Table.HeaderCell>Cargo</Table.HeaderCell>
        <Table.HeaderCell>Fecha</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            props.PenaltiesData.map((item,key)=>{

                return (<Table.Row  key={'penalties-item-'+key}
                onClick={()=>handleClick('penalties', item)}
                style={isSelected(item)}>
            
                    <Table.Cell>
                       {item.penaltie_name}
                    </Table.Cell>
                    <Table.Cell>
                        COP {parseFloat(item.charge).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {item.created_at}
                    </Table.Cell>
                </Table.Row>)
            })
        }
    </Table.Body>
  </Table>



    
        </div>
}

export default withRouter(PaySheetPenaltiesDetail);