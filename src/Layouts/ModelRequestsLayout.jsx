import React from 'react'
import { Grid } from 'semantic-ui-react'
import returnChildByStringKey from '../Helpers/returnChildByStringKey'
import { withRouter } from 'react-router-dom'


function CompanyLearningVideoPlayerLayout (props){
	    
  	const headerTitle = `Solicitudes`
  	const headerSubtitle = `Listado de solicitudes activas y procesadas`
  	


	

return (

	<Grid>
		<Grid.Column width={16}>
        	<h2 style={{marginBottom:'0px'}}>{headerTitle}</h2>
        	<p style={{marginTop:'0px'}}>{headerSubtitle}</p>
      		
		</Grid.Column>
		<Grid.Column width={8}>
			<Grid>
				<Grid.Column width={16}>
				
					
					{returnChildByStringKey(props.children, 'ModelRequestsTable', {
						...props.ModelRequestsProps,
						data : props.ModelRequestsProps.tableData,
					})}
				
				</Grid.Column>

			</Grid>
		</Grid.Column>
		<Grid.Column width={8}>
			<Grid>
				<Grid.Column width={16}>
			
				{returnChildByStringKey(props.children, 'ModelRequestsForm', {
					...props.ModelRequestsProps,
					selectOptions : props.ModelRequestsProps.DataSetupRequests,
				})}
				
				</Grid.Column>
			</Grid>
		</Grid.Column>
	</Grid>


)
}

export default withRouter(CompanyLearningVideoPlayerLayout)