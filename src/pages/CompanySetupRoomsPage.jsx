import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import CompanySetupRoomsList from '../components/CompanySetupRoomsList/Component'
import CompanySetupRoomsCreate from '../components/CompanySetupRoomsCreate/Component'
import CompanySetupRoomsUpdate from '../components/CompanySetupRoomsUpdate/Component'
import CompanySetupRoomsDetail from '../components/CompanySetupRoomsDetail/Component'
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function CompanySetupRoomsPage(props) {

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
				
				{(props.list) && <CompanySetupRoomsList /> }

				{(props.create) && <CompanySetupRoomsCreate /> }

				{(props.update) && <CompanySetupRoomsUpdate /> }

				{(props.detail) && <CompanySetupRoomsDetail /> }

		  	</Grid.Column>
	  	</Grid.Row>
  	</Grid>
	</div>
	}

}

export default CompanySetupRoomsPage;
