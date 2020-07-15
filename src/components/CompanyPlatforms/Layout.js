import React from 'react';
import { withRouter } from 'react-router-dom'
import { Label,Grid,Button, Table,Header, Icon, Input} from 'semantic-ui-react'

function Layout(props) {

  return (
 
<Grid columns='equal'>

 
    <Grid.Column width={15}>


	<Header as='h2' floated='right'>
		<Button positive onClick={()=>props.handleSubmit()} disabled={(props.Updating)? true : false }>
      <Icon disabled name='check' /> Actualizar
    </Button>
    </Header>
    <Header as='h2' floated='left'>
		Configuracion de plataformas
    		<Header.Subheader>
				Por favor complete la informacion solicitada para conectar con las plataformas
    		</Header.Subheader>
    </Header>
	<Table>
        
	<Table.Header>
      <Table.Row>
        <Table.HeaderCell width={4}>Plataforma</Table.HeaderCell>
        <Table.HeaderCell>API KEY</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
	<Table.Body>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Chaturbate
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Chaturbate_api_token'
				value={props.CompanyPlatformsData.Chaturbate_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>

</Table.Row>

          


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Bongacams
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Bongacams_api_token'
				value={props.CompanyPlatformsData.Bongacams_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Cam4
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Cam4_api_token'
				value={props.CompanyPlatformsData.Cam4_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Camsoda
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Camsoda_api_token'
				value={props.CompanyPlatformsData.Camsoda_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> MyfreeCams
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='MyfreeCams_api_token'
				value={props.CompanyPlatformsData.MyfreeCams_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Stripchat
        </Label>
    </Table.Cell>
    <Table.Cell>

<Input
    disabled={props.loading}
    style={{marginBottom:'1em'}}
    fluid
    control='input'
    name='Stripchat_api_token'
    value={props.CompanyPlatformsData.Stripchat_api_token}
    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
/>
</Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> liveJasmin
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='liveJasmin_api_token'
				value={props.CompanyPlatformsData.liveJasmin_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Streamate
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Streamate_api_token'
				value={props.CompanyPlatformsData.Streamate_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Skyprivate
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Skyprivate_api_token'
				value={props.CompanyPlatformsData.Skyprivate_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Imlive
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Imlive_api_token'
				value={props.CompanyPlatformsData.Imlive_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> xlove
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='xlove_api_token'
				value={props.CompanyPlatformsData.xlove_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>


<Table.Row>
    <Table.Cell>
        <Label ribbon color='red'>
            <Icon disabled name='video camera'/> Flirt 4 Free
        </Label>
    </Table.Cell>
    <Table.Cell>

            <Input
				disabled={props.loading}
				style={{marginBottom:'1em'}}
				fluid
				control='input'
				name='Flirt4Free_api_token'
				value={props.CompanyPlatformsData.Flirt4Free_api_token}
				onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
			/>
            </Table.Cell>
</Table.Row>




			

	</Table.Body>
	</Table> 


  
  

    </Grid.Column>
  </Grid>

  );
}

export default withRouter(Layout);
