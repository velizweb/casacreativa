import React,{useContext} from 'react'
import { Grid } from 'semantic-ui-react'
import NavBar from '../components/Navbar/Component'
import ModelMenu from '../components/ModelMenu/Component'

import EcommerceStoreController from '../Controllers/EcommerceStoreController'
import EcommerceCartController from '../Controllers/EcommerceCartController'
import EcommerceStoreLayout from '../Layouts/EcommerceStoreLayout'
import EcommerceCheckoutLayout from '../Layouts/EcommerceCheckoutLayout'


import EcommerceCartList from '../components/EcommerceCartList'
import EcommerceItemList from '../components/EcommerceItemList/Component'
import EcommerceCartTotal from '../components/EcommerceCartTotal'
import EcommerceCart from '../components/EcommerceCart'

import EcommercePayoutButton from '../components/EcommercePayoutButton'
import EcommerceChekoutReturnButton from '../components/EcommerceChekoutReturnButton'
import EcommerceDeleteOrderButton from '../components/EcommerceDeleteOrderButton'
import EcommerceCheckoutSuccess from '../components/EcommerceCheckoutSuccess'

import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';

import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';

function EcommercePage(props) {
	
	const user = useContext(UserContext);
	const UserRolsDetail = useContext(UserRolsContext);


	
	if(!user.access_token){
		return <LoaderPage/>
	}

	

	if(!UserRolsDetail.UserRolsDetail.length){
		return <RequestRolsPage />
	}



	if(props.PageAccess( props.accesibleBy , UserRolsDetail.UserRolsDetail ) ){
  	return <div>
		  <NavBar/>
		  <Grid divided>
			<Grid.Row>
				<Grid.Column width={3}>
					<ModelMenu/>
            		</Grid.Column>
				<Grid.Column width={13}>

					{(props.explorer) && 
					<EcommerceStoreController>
						<EcommerceCartController>
							<EcommerceStoreLayout>
								<EcommerceItemList itemWidth={4} key={'EcommerceItemList'} />
								<EcommerceCart key={'EcommerceCart'} />
							</EcommerceStoreLayout>
						</EcommerceCartController>
					</EcommerceStoreController>}
					
					{(props.checkout) && 
						<EcommerceCartController>
							<EcommerceCheckoutLayout>
								<EcommerceCartList key={'EcommerceCartList'} />
								<EcommerceCartTotal key={'EcommerceCartTotal'} />
								<EcommercePayoutButton key={'EcommercePayoutButton'} />
								<EcommerceChekoutReturnButton key={'EcommerceChekoutReturnButton'} />
								<EcommerceDeleteOrderButton key={'EcommerceDeleteOrderButton'} />
							</EcommerceCheckoutLayout>
						</EcommerceCartController>}
					
					{ (props.checkoutSuccess) && <EcommerceCheckoutSuccess /> }

            		</Grid.Column>
        			</Grid.Row>
        		</Grid>
	  	</div>
	}
}

export default EcommercePage;
