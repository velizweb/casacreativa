import React from 'react';
import { withRouter } from 'react-router-dom'
import { Grid, Segment, Form, Input, Progress, Button, Icon } from 'semantic-ui-react'
import DividedHeader from '../gui/DividedHeader'

function Layout(props) {

	const headerTitle = `Galeria de imagenes`
	const headerSubtitle = `Agregar imagenes`
	const headerButtonText = 'Subir imagenes'
	const headerButtonIcon = 'check'



	if(props.Loading){
		return (
			<Grid>
			<Grid.Column width={16}>
				<Segment>
					<h3>Subiendo imagenes</h3>
					<p>Sus imagenes se estan subiendo, este proceso puede tomar varios minutos, espere un momento porfavor</p>
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
					<h3>Imagenes subidas con exito</h3>
					<Button positive onClick={()=>props.history.push(`/model/gallery/${props.company_id}`)}>
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
									<label htmlFor="videoFile">Selecciona las imagenes</label>
									<input type={'file'} onChange={ (e)=>props.setImageFiles(e.target.files) } multiple />
            					</Grid.Column>
        					</Grid>
        				</Form>
			</Grid.Column>
		</Grid>
		</Segment>
	</div>
		
}

export default withRouter(Layout);