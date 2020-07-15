import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import returnChildByStringKey from '../Helpers/returnChildByStringKey'
import { withRouter } from 'react-router-dom'
import Env from '../Env';

function CompanyLearningVideoPlayerLayout (props){
	    
	const company_id  = props.match.params.company_id
  	const headerTitle = `Capacitaciones`
  	const headerSubtitle = `Lista de videos para capacitaciones`
  	

	function openVideo(item){
		props.history.push(`/model/learning/find/${company_id}/${item.id}`)
	    }
	

return (
	<Grid>
		<Grid.Column width={16} divided>
        	<h2>{headerTitle}</h2>
        	<p>{headerSubtitle}</p>
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
					{returnChildByStringKey(props.children, 'CompanyLearningList', {
						...props.CompanyLearningListProps,
						itemWidth : 16,
						onItemClick: openVideo,
					})}
				</Grid.Column>
			</Grid>
		</Grid.Column>
	</Grid>

   
  )
}

export default withRouter(CompanyLearningVideoPlayerLayout)