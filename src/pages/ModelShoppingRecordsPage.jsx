import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import ModelMenu from '../components/ModelMenu/Component';

import ModelShoppingRecordsMasterController from '../Controllers/ModelShoppingRecordsMasterController';
import ModelShoppingRecordsLayout from '../Layouts/ModelShoppingRecordsLayout';
import ModelShoppingRecordsMasterTable from '../components/ModelShoppingRecordsMasterTable';

import ModelShoppingRecordsMasterDetailController from '../Controllers/ModelShoppingRecordsMasterDetailController';
import ModelShoppingRecordsDetailLayout from '../Layouts/ModelShoppingRecordsDetailLayout';
import ModelShoppingRecordsDetailTable from '../components/ModelShoppingRecordsDetailTable';

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
					<ModelShoppingRecordsMasterController>
						<ModelShoppingRecordsLayout>
							<ModelShoppingRecordsMasterTable/>
						</ModelShoppingRecordsLayout>
					</ModelShoppingRecordsMasterController>}

					{(props.detail) && 
					<ModelShoppingRecordsMasterDetailController>
						<ModelShoppingRecordsDetailLayout>
							<ModelShoppingRecordsDetailTable/>
						</ModelShoppingRecordsDetailLayout>
					</ModelShoppingRecordsMasterDetailController>}
            	</Grid.Column>
        	</Grid.Row>
        </Grid>
	  	</div>
	}
}

export default ModelPenaltiesPage;
