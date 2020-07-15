import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import ModelMenu from '../components/ModelMenu/Component';

import ModelGalleryController from '../Controllers/ModelGalleryController';
import ModelGalleryLayout from '../Layouts/ModelGalleryLayout';
import ModelGalleryCreate from '../components/ModelGalleryCreate/Component';
import ModelGallery from '../components/ModelGallery';


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
						<ModelGalleryController>
							<ModelGalleryLayout>
								<ModelGallery />
							</ModelGalleryLayout>
						</ModelGalleryController>}

						{(props.create) && 
						<ModelGalleryCreate /> }


						

						

            	</Grid.Column>
        	</Grid.Row>
        </Grid>
	  	</div>
	}
}

export default CompanyLearningPage;
