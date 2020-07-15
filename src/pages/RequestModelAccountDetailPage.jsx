import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from '../components/Navbar/Component';
import CompanySelector from '../components/AdminMenu/Component';
import RequestModelAccountDetail from '../components/RequestModelAccountDetail/Component';
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';


function RequestModelAccountDetailPage(props) {

	const user = useContext(UserContext);

	if(!user.access_token){
		return (<LoaderPage/>);
	}

	if(parseInt(user.user_type) === 1)
	{
	return <div>
	<NavBar/>
	<Grid divided>
	  <Grid.Row>
		  <Grid.Column width={3}>
			  <CompanySelector/>
		  </Grid.Column>
		  <Grid.Column width={13}>
			  <RequestModelAccountDetail />
		  </Grid.Column>
	  </Grid.Row>
  </Grid>
	</div>
	}

else{
	return <div>No tienes permisos para visualizar esta pagina</div>
}

}

export default RequestModelAccountDetailPage;
