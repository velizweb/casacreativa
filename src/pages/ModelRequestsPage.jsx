import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import ModelMenu from '../components/ModelMenu/Component';

import ModelRequestsController from '../Controllers/ModelRequestsController';
import ModelRequestsLayout from '../Layouts/ModelRequestsLayout';
import ModelRequestsTable from '../components/ModelRequestsTable/index';
import ModelRequestsForm from '../components/ModelRequestsForm/index';

import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function ModelRequestsPage(props) {
	
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
					<ModelRequestsController>
						<ModelRequestsLayout>
							<ModelRequestsTable key={'ModelRequestsTable'}/>
							<ModelRequestsForm key={'ModelRequestsForm'}/>
						</ModelRequestsLayout>
					</ModelRequestsController>}
            	</Grid.Column>
        	</Grid.Row>
        </Grid>
	  	</div>
	}
}

export default ModelRequestsPage;
