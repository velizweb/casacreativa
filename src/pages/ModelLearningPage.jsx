import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import ModelMenu from '../components/ModelMenu/Component';

import CompanyLearningListController from '../Controllers/CompanyLearningListController';
import ModelLearningListLayout from '../Layouts/ModelLearningListLayout';
import CompanyLearningList from '../components/CompanyLearningList/Component';

import CompanyLearningVideoPlayerController from '../Controllers/CompanyLearningVideoPlayerController';
import CompanyLearningVideoPlayer from '../components/CompanyLearningVideoPlayer/Component';
import ModelLearningVideoPlayerLayout from '../Layouts/ModelLearningVideoPlayerLayout';

import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function CompanyLearningPage(props) {
	
	const user = useContext(UserContext);
	const UserRolsDetail = useContext(UserRolsContext);


	
	if(!user.access_token){
		return <LoaderPage/>;
	}

	

	if(!UserRolsDetail.UserRolsDetail.length){
		return <RequestRolsPage />;
	}



	if(props.PageAccess( props.accesibleBy , UserRolsDetail.UserRolsDetail ) ){
  	return <div>
		  <NavBar/>
		  <Grid divided>
			<Grid.Row>
				<Grid.Column width={3}>
					<ModelMenu/>
            		</Grid.Column>
				<Grid.Column width={13}>
						{(props.list) && 
							<CompanyLearningListController>
								<ModelLearningListLayout>
									<CompanyLearningList itemWidth={4} />
								</ModelLearningListLayout>
							</CompanyLearningListController>}

						{(props.find) && <div>

								<CompanyLearningVideoPlayerController>
									<CompanyLearningListController>
										<ModelLearningVideoPlayerLayout>
											<CompanyLearningList key={'CompanyLearningList'}/>
											<CompanyLearningVideoPlayer key={'CompanyLearningVideoPlayer'} />
										</ModelLearningVideoPlayerLayout>
									</CompanyLearningListController>
								</CompanyLearningVideoPlayerController>
								</div>
							}

            	</Grid.Column>
        	</Grid.Row>
        </Grid>
	  	</div>
	}
}

export default CompanyLearningPage;
