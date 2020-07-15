import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import CompanySetupInventaryList from '../components/CompanySetupInventaryList/Component'
import CompanySetupInventaryCreate from '../components/CompanySetupInventaryCreate/Component'
import CompanySetupInventaryUpdate from '../components/CompanySetupInventaryUpdate/Component'
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function CompanySetupInventaryPage(props) {

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
				
				{(props.list) && <CompanySetupInventaryList /> }

				{(props.create) && <CompanySetupInventaryCreate /> }

				{(props.update) && <CompanySetupInventaryUpdate /> }

		  	</Grid.Column>
	  	</Grid.Row>
  	</Grid>
	</div>
	}

}

export default CompanySetupInventaryPage;
