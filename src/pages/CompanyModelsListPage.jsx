import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import Models from '../components/Models/Component';
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function ModelsListPage(props) {

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
			  <Models />
		  </Grid.Column>
	  </Grid.Row>
  </Grid>
	</div>
	}

}

export default withRouter(ModelsListPage);
