import React,{useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';
import PaySheetDetail from '../components/PaySheetDetail/Component';

function PaySheetDetailPage(props) {

	const user = useContext(UserContext);

	if(!user.access_token){
		return (<LoaderPage/>);
	}

	return <div>
	<NavBar/>
	<Grid divided>
	  <Grid.Row>
		  <Grid.Column width={3}>
			  <CompanyMenu/>
		  </Grid.Column>
		  <Grid.Column width={13}>
		  <PaySheetDetail />
		  </Grid.Column>
	  </Grid.Row>
  </Grid>
	</div>

}

export default withRouter(PaySheetDetailPage);
