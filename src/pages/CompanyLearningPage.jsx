import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';

import CompanyLearningListController from '../Controllers/CompanyLearningListController';
import CompanyLearningListLayout from '../Layouts/CompanyLearningListLayout';
import CompanyLearningList from '../components/CompanyLearningList/Component';

import CompanyLearningCreate from '../components/CompanyLearningCreate/Component';
import CompanyLearningUpdate from '../components/CompanyLearningUpdate/Component';

import CompanyLearningVideoPlayerController from '../Controllers/CompanyLearningVideoPlayerController';
import CompanyLearningVideoPlayer from '../components/CompanyLearningVideoPlayer/Component';
import CompanyLearningVideoPlayerLayout from '../Layouts/CompanyLearningVideoPlayerLayout';

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
					<CompanyMenu/>
            		</Grid.Column>
				<Grid.Column width={13}>
						{(props.list) && 
							<CompanyLearningListController>
								<CompanyLearningListLayout>
									<CompanyLearningList itemWidth={4} />
								</CompanyLearningListLayout>
							</CompanyLearningListController>}

						{(props.find) && <div>

								<CompanyLearningVideoPlayerController>
									<CompanyLearningListController>
										<CompanyLearningVideoPlayerLayout>
											<CompanyLearningList key={'CompanyLearningList'}/>
											<CompanyLearningVideoPlayer key={'CompanyLearningVideoPlayer'} />
										</CompanyLearningVideoPlayerLayout>
									</CompanyLearningListController>
								</CompanyLearningVideoPlayerController>
								</div>
							}
							
						{(props.create) && <CompanyLearningCreate /> }
						{(props.update) && <CompanyLearningUpdate /> }
            	</Grid.Column>
        	</Grid.Row>
        </Grid>
	  	</div>
	}
}

export default CompanyLearningPage;
