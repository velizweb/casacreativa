import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DividedHeader from '../gui/DividedHeader'
import returnChildByStringKey from '../Helpers/returnChildByStringKey'
import { withRouter } from 'react-router-dom'
import Env from '../Env';

function CompanyLearningVideoPlayerLayout (props){
	    
	const company_id  = props.match.params.company_id
  	const companyLearningCreateURI = `/company/learning/create/${company_id}`
  	const headerTitle = `Capacitaciones`
  	const headerSubtitle = `Lista de videos para capacitaciones`
  	const headerButtonText = 'Nuevo video'
  	const headerButtonIcon = 'plus' 
 

	/*
	*	On Header button click
	*/
	function onHeaderButtonClick(uri){
		props.history.push(uri)
	}

	function openVideo(item){
		props.history.push(`/company/learning/find/${item.company_profile_id}/${item.id}`)
	    }
	

return (
	<Grid>
		<Grid.Column width={16}>
		<Segment>
		<DividedHeader
		title={ headerTitle }
		subtitle={ headerSubtitle }
		buttonText={ headerButtonText }
		headerButtonIcon={ headerButtonIcon }
		onHeaderButtonClick={ ()=>onHeaderButtonClick(companyLearningCreateURI) }
		/>
		</Segment>
		</Grid.Column>
		<Grid.Column width={10}>
			<Grid>
				<Grid.Column width={16}>
				<Segment>
					
					{returnChildByStringKey(props.children, 'CompanyLearningVideoPlayer', {
						src : Env.storage_uri(props.CompanyLearningVideoPlayerProps.Item.video_file)
					})}
				</Segment>
				</Grid.Column>

			</Grid>
			<Grid>
				<Grid.Column width={16}>
				<Segment>
					{returnChildByStringKey(props.children, 'CompanyLearningList', {
						...props.CompanyLearningListProps,
						itemWidth : 8,
						onItemClick: openVideo,
					})}
				</Segment>
				</Grid.Column>
			</Grid>
		</Grid.Column>
		<Grid.Column width={6}>
			<Grid>
				<Grid.Column width={16}>
				<Segment>
					{returnChildByStringKey(props.children, 'CompanyLearningList', {
						...props.CompanyLearningListProps,
						itemWidth : 16,
						onItemClick: openVideo,
					})}
				</Segment>
				</Grid.Column>
			</Grid>
		</Grid.Column>
	</Grid>

   
  )
}

export default withRouter(CompanyLearningVideoPlayerLayout)