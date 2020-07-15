import React from 'react';
import { withRouter } from 'react-router-dom'
import { Grid, Segment, Form, Input, Progress, Button, Icon } from 'semantic-ui-react'
import DividedHeader from '../gui/DividedHeader'

function Layout(props) {

	const headerTitle = `Capacitaciones`
	const headerSubtitle = `Agregar nuevo video`
	const headerButtonText = 'Subir video'
	const headerButtonIcon = 'check'



	if(props.Loading){
		return (
			<Grid>
			<Grid.Column width={16}>
				<Segment>
					<h3>Subiendo video</h3>
					<p>Su video se esta subiendo, este proceso puede tomar varios minutos, espere un momento porfavor</p>
					<Progress percent={props.Progress} progress={props.Progress} color={'green'} size={'big'} />
				</Segment>
			</Grid.Column>
			</Grid>
		)
	}

	if(!props.Loading && props.Progress === 100){
		return (
			<Grid>
			<Grid.Column width={16}>
				<Segment>
					<h3>Su archivo se ha subido con exito</h3>
					<Button positive onClick={()=>props.history.push(`/company/learning/${props.company_id}`)}>
						<Icon name={'check'} /> Volver a la lista
					</Button>
				</Segment>
			</Grid.Column>
			</Grid>
		)
	}

	return <div>
		<Segment>
			<DividedHeader
				title={ headerTitle }
				subtitle={ headerSubtitle }
				buttonText={ headerButtonText }
				headerButtonIcon={ headerButtonIcon }
				onHeaderButtonClick={ ()=>props.onHeaderButtonClick() }/>
		
		<Grid>
			<Grid.Column width={6}>
				
					 <Form size={'small'}>
        					<Grid>
            					<Grid.Column width={16}>
								<label>Titulo</label>
								<Input
									style={{marginBottom:'1em'}}
									fluid
									control='input'
									name='title'
									value={props.Data.title}
									onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
								/>

								<label>Descripción</label>
								<Input
									style={{marginBottom:'1em'}}
									fluid
									control='input'
									name='description'
									value={props.Data.description}
									onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
								/>

								<label htmlFor="videoFile">Selecciona un video</label>
								<input type={'file'} onChange={ (e)=>props.setVideoFile(e.target.files[0]) } />
								
								

            					</Grid.Column>
        					</Grid>
        				</Form>
			</Grid.Column>
		</Grid>
		</Segment>
	</div>
		
}

export default withRouter(Layout);