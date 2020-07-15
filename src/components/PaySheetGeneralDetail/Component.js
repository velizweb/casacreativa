import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'



function PaySheetGeneralDetail(props) {

     return <div>
       <Table celled selectable striped style={{fontSize:'.8em'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Modelo</Table.HeaderCell>
        <Table.HeaderCell>I. Bruto</Table.HeaderCell>
        <Table.HeaderCell>I. Modelo</Table.HeaderCell>
        <Table.HeaderCell>RTF</Table.HeaderCell>
		<Table.HeaderCell>Compras</Table.HeaderCell>
		<Table.HeaderCell>Multas</Table.HeaderCell>
        <Table.HeaderCell>Solicitudes</Table.HeaderCell>
        <Table.HeaderCell>T. Egresos</Table.HeaderCell>
        <Table.HeaderCell>T. Devengado</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        {props.PaySheetDetailData.first_name} {props.PaySheetDetailData.last_name}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(props.PaySheetDetailData.INGRESO_BRUTO_COP).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(props.PaySheetDetailData.INGRESO_BRUTO_MODELO).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(props.PaySheetDetailData.RETENCION_FUENTE_MODELO).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(props.PaySheetDetailData.TOTAL_COMPRAS).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(props.PaySheetDetailData.TOTAL_MULTAS).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(props.PaySheetDetailData.TOTAL_SOLICITUDES).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(props.PaySheetDetailData.TOTAL_EGRESOS).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>{(props.PaySheetDetailData.TOTAL_DEVENGADO < 0 ) ? 0 : parseFloat(props.PaySheetDetailData.TOTAL_DEVENGADO).toLocaleString()} </Table.Cell>
		
      </Table.Row>
         
    
	  
    </Table.Body>
  </Table>
        </div>



       

}

export default withRouter(PaySheetGeneralDetail);