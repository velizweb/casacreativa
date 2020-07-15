import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Icon,Button,Loader,Grid } from 'semantic-ui-react'
import GuiHeader from'../../gui/GuiHeader'


function Layout(props) {

    if(props.loading){
        return (<Loader active inline='centered' />)
    }

    function goTo(company_id , paysheet_code, item_id){
        props.history.push( `/company/paysheet/detail/${company_id}/${paysheet_code}/${item_id} `)
    }

    return <Grid>
    <Grid.Row>
        <Grid.Column>
            <GuiHeader
                header_text={'Gestionar nomina'}
                button_text={'Calcular nueva nomina'}
                header_sub_text={'Loren ipsun dolor site amet'}
                page={'/company/paysheet/create/'+props.company_id}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
     

<Table celled selectable striped style={{fontSize:'.7em'}}>
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

		<Table.HeaderCell>Option</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      


    {
        props.PaySheetHistoryData.map((item,key)=>{

            return (
                <Table.Row key={key}>
                    <Table.Cell>
                        {item.first_name} {item.last_name}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(item.INGRESO_BRUTO_COP).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(item.INGRESO_BRUTO_MODELO).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(item.RETENCION_FUENTE_MODELO).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(item.TOTAL_COMPRAS).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(item.TOTAL_MULTAS).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(item.TOTAL_SOLICITUDES).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        {parseFloat(item.TOTAL_EGRESOS).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>{(item.TOTAL_DEVENGADO < 0 ) ? 0 : parseFloat(item.TOTAL_DEVENGADO).toLocaleString()} </Table.Cell>
		<Table.Cell>

			
                {
                    (item.paid === 1) ? 
                    <Button animated='vertical' positive onClick={()=>props.mark(props.company_id, item.id)}>
      			    <Button.Content hidden>Revertir</Button.Content>
      				<Button.Content visible>
        			<Icon name='checkmark' />
      			    </Button.Content>
    		        </Button>
                    :
                    <Button animated='vertical' onClick={()=>props.mark(props.company_id, item.id)}>
      			    <Button.Content hidden>Pagar</Button.Content>
      				<Button.Content visible>
        			<Icon name='checkmark' />
      			    </Button.Content>
    		        </Button>
                }

                    <Button animated='vertical' positive onClick={()=>goTo(props.company_id, item.paysheet_code, item.id)}>
      			    <Button.Content hidden>Open</Button.Content>
      				<Button.Content visible>
        			<Icon name='folder' />
      			    </Button.Content>
    		        </Button>

		</Table.Cell>
      </Table.Row>
            )
        })
    }
	  
    </Table.Body>
  </Table>


                  
        </Grid.Column>
    </Grid.Row>
</Grid>

}

export default withRouter(Layout);