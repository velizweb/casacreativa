import React,{useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import NewPaySheet from '../components/NewPaysheet/Component';
import PaySheetHistory from '../components/PaySheetHistory/Component';
import PaySheetManagement from '../components/PaySheetManagement/Component';
import PaysheetDetail from '../components/PaySheetDetail/Component';

import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function CompanyPaysheetPage(props) {

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
		  		{(props.list)   && <PaySheetHistory /> }
                {(props.latest)   && <PaySheetManagement /> }
                {(props.detail)   && <PaysheetDetail /> }
                {(props.load)   && <PaySheetManagement /> }
				{(props.create) && <NewPaySheet /> }
		  </Grid.Column>
	  </Grid.Row>
  </Grid>
	</div>
	}

}

export default withRouter(CompanyPaysheetPage);
