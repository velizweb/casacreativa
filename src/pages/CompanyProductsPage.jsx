import React,{useContext} from 'react';
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component';
import CompanyMenu from '../components/CompanyMenu/Component';
import CompanyProducts from '../components/CompanyProducts/Component';
import CompanyProductCreate from '../components/CompanyProductCreate/Component';
import CompanyProductUpdate from '../components/CompanyProductUpdate/Component';
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function CompanyProductsPage(props) {
	
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
						{(props.list) && <CompanyProducts /> }
						{(props.create) && <CompanyProductCreate /> }
						{(props.update) && <CompanyProductUpdate /> }
            	</Grid.Column>
        	</Grid.Row>
        </Grid>
	  	</div>
	}
}

export default CompanyProductsPage;
