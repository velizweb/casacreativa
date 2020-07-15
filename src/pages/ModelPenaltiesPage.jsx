import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import ModelMenu from '../components/ModelMenu/Component';

import ModelPenaltiesController from '../Controllers/ModelPenaltiesController';
import ModelPenaltiesLayout from '../Layouts/ModelPenaltiesLayout';
import ModelPenaltiesTable from '../components/ModelPenaltiesTable/index';

import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function ModelPenaltiesPage(props) {
	
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
					<ModelPenaltiesController>
						<ModelPenaltiesLayout>
							<ModelPenaltiesTable/>
						</ModelPenaltiesLayout>
					</ModelPenaltiesController>}
            	</Grid.Column>
        	</Grid.Row>
        </Grid>
	  	</div>
	}
}

export default ModelPenaltiesPage;
