import React,{useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import AdminMenu from '../components/AdminMenu/Component';
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';
import AccountSecurityUpdate from '../components/AccountSecurityUpdate/Component';



function AccountSecurityPage(props) {

	const user = useContext(UserContext);

	if(!user.access_token)
	{
		return (<LoaderPage/>);
	}

	if(parseInt(user.user_type) !== 1 )
	{
		return <div>No tienes permisos para visualizar esta pagina</div>;
	}

	return <div>
	<NavBar/>
	<Grid divided centered>
	  <Grid.Row>
		  <Grid.Column width={6}>
				{(props.update) && <AccountSecurityUpdate /> }
		  </Grid.Column>
	  </Grid.Row>
  </Grid>
	</div>

}

export default withRouter(AccountSecurityPage);
