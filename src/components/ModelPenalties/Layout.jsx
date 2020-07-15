import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form,Grid,Select,Button } from 'semantic-ui-react'
import ModelPenaltiesTable from '../ModelPenaltiesTable'
function Layout(props){

	function readTotal(){
		
		let result = 0;
		
		props.data.map((item,key)=>{
			result += item.charge;
			return true;
		})

		return result
	}


    return <div>
	<Form size={'small'} onSubmit={props.apply_penaltie}>
		<Grid>
			<Grid.Column width={6}>
		    		<Form.Field
                        control={Select}
                        options={props.DataSelectPenalties}
                        label={{ children: 'Selecciona una multa', htmlFor: 'form-select-control-penaltie' }}
                        placeholder='Multa'
                        search
                        searchInput={{ id: 'form-select-control-penaltie' }}
                        value={props.NewPenalty.penaltie_id}
                        name='penaltie_id'
                        onChange={(e,{ value,name,test }) => props.handleChangeSelect( value, name, test ) } />
			</Grid.Column>

            	<Grid.Column width={4}>
				<Form.Field 
			  	label={{ children: 'Cargo', htmlFor: 'form-select-control-charge' }}
                    	fluid
                    	control='input'
                    	placeholder='0.00'
                    	name='PenaltieCharge'
                    	value={props.PenaltieCharge}
                    	onChange={(e)=>props.handleChangeCharge(e.target.value,e.target.name)} />
            	</Grid.Column>

			<Grid.Column width={6}>
				<br/>
                    	<Button type='submit' positive fluid>Aplicar nueva multa</Button>
                	</Grid.Column>
		</Grid>
	</Form>

	<p>Total : { readTotal() } </p>

	<ModelPenaltiesTable data={props.data}/>

      
	</div>
  
}

export default withRouter(Layout);