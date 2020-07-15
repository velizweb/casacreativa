import React from 'react';
import { withRouter } from 'react-router-dom'
import { Table,Icon,Label,Button,Loader,Grid } from 'semantic-ui-react'
import GuiHeader from'../../gui/GuiHeader'


function Layout(props) {

    function gotTo(company_id){
        props.history.push( `/roles/validator/${company_id}`)
    }

    if(props.loading){
        return (<Loader active inline='centered' />)
    }

    return <Grid>
    <Grid.Row>
        <Grid.Column>
            <GuiHeader
                header_text={'Mis estudios'}
                button_text={'Nuevo estudio'}
                header_sub_text={'Administre los estudios desde este modulo'}
                page={'/companies-create'}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
     

<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Estudio</Table.HeaderCell>
        <Table.HeaderCell>Direccion</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Tlf. Primario</Table.HeaderCell>
        <Table.HeaderCell>Tlf. Secundario</Table.HeaderCell>
		<Table.HeaderCell>Option</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      
    {
        props.CompaniesData.map((item,key)=>{

            return (
                <Table.Row key={'company'+key}>
        <Table.Cell>
            <Label ribbon color='green'>{item.company_name}</Label>
        </Table.Cell>
            <Table.Cell>{item.address}</Table.Cell>
            <Table.Cell>{item.company_email}</Table.Cell>
            <Table.Cell>{item.primary_phone}</Table.Cell>
            <Table.Cell>{item.secondary_phone}</Table.Cell>

        
		<Table.Cell>
		    <Button animated size='small' positive onClick={()=>gotTo( item.id)}>
			    <Button.Content visible>Abrir</Button.Content>
				    <Button.Content hidden >
					    <Icon name='folder open' />
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