import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import CompanySetupRequestsList from '../components/CompanySetupRequestsList/Component'
import CompanySetupRequestsCreate from '../components/CompanySetupRequestsCreate/Component'
import CompanySetupRequestsUpdate from '../components/CompanySetupRequestsUpdate/Component'
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function ChargesRequestsManagementPage(props) {

	const user = useContext(UserContext);
	const UserRolsDetail = useContext(UserRolsContext);

	if(!user.access_token){
		return (<LoaderPage/>);
	}

	if(!UserRolsDetail.UserRolsDetail.length){
		return (<RequestRolsPage />);
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
				
				{(props.list) && <CompanySetupRequestsList /> }

				{(props.create) && <CompanySetupRequestsCreate /> }

				{(props.update) && <CompanySetupRequestsUpdate /> }

		  	</Grid.Column>
	  	</Grid.Row>
  	</Grid>
	</div>
	}

}

export default ChargesRequestsManagementPage;
