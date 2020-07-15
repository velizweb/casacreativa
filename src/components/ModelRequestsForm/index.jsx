import React from 'react'
import { Form,Grid,Select,Button } from 'semantic-ui-react'

function index(props){



     return <Form size={'small'} onSubmit={props.applyRequest}>
     <Grid>
			<Grid.Column width={10}>
		    		<Form.Field
                        control={Select}
                        options={props.selectOptions}
                        label={{ children: 'Selecciona una solicitud', htmlFor: 'form-select-control-penaltie' }}
                        placeholder=''
                        search
                        searchInput={{ id: 'form-select-control-penaltie' }}
                        value={props.selecTedRequestId}
                        name='selecTedRequestId'
                        onChange={(e,{ value,name,test }) => props.handleChangeSelect( value, name, test ) } />
			</Grid.Column>
            	

			<Grid.Column width={6}>
				<br/>
                    	<Button type='submit' positive fluid>Solicitar</Button>
                	</Grid.Column>
	</Grid>
		</Form>

}

export default index