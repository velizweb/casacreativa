import React,{useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';
import CompanyInfoSetup from '../components/CompanyInfoSetup/Component';



function CompanyInfoSetupPage(props) {

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
	<Grid width={16}>
	  	<Grid.Row>
			<Grid.Column width={3}>
				<CompanyMenu/>
			</Grid.Column>
		  	<Grid.Column width={13}>
			  <Grid>
			  	<Grid.Row>
			  		<Grid.Column width={6}>
						{(props.update) && <CompanyInfoSetup /> }
					</Grid.Column>
				</Grid.Row>
			  </Grid>
		  	</Grid.Column>
	  </Grid.Row>
  </Grid>
	</div>

}

export default withRouter(CompanyInfoSetupPage);
