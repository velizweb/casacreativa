import React from 'react';
import { withRouter } from 'react-router-dom'
import { Grid,Button, Header, Icon } from 'semantic-ui-react'


function DividedHeader(props) {
      
  	return (
		<Grid columns='equal'>
			<Grid.Column width={15}>
				<Header as='h2' floated='right'>
					<Button positive onClick={()=>props.onHeaderButtonClick()} disabled={(props.Loading) ? true : false }>
						<Icon name={props.headerButtonIcon} /> {props.buttonText}
					</Button>
				</Header>
				<Header as='h2' floated='left'>
					{props.title}

                              {(props.subtitle) &&
					<Header.Subheader>
						{props.subtitle}
					</Header.Subheader>}

				</Header>
			</Grid.Column>
		</Grid>


	);
}

export default withRouter(DividedHeader);
