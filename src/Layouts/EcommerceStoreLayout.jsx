import React from 'react'
import { Grid } from 'semantic-ui-react'
import returnChildByStringKey from '../Helpers/returnChildByStringKey'
import { withRouter } from 'react-router-dom'

function EcommerceLayout (props){
	    
	
  	const headerTitle = `Tienda en linea`
  	const headerSubtitle = `Lista de productos`
  	
 

	const EcommerceStoreProps = {
		itemWidth : 4,
		data : props.EcommerceStoreProps.EcommerceStoreItems,
		onClickAddToCart : props.EcommerceCartProps.onClickAddToCart
	}

	const EcommerceCartProps = {
		data : props.EcommerceCartProps.CartDetail.items,
		total : props.EcommerceCartProps.CartDetail.total,
		onClickAddToCart : props.EcommerceCartProps.onClickAddToCart,
		onClickDeleteItemCart : props.EcommerceCartProps.onClickDeleteItemCart,
		onQtyChangeHandler : props.EcommerceCartProps.onQtyChangeHandler,
		
	}

	
	
return (
	<Grid divided>
	
		<Grid.Column width={11}>
			<Grid>
				<Grid.Column width={16}>
					<h2 style={{marginBottom:'0px'}}>{headerTitle}</h2>
	        			<p style={{marginTop:'0px'}}>{headerSubtitle}</p>
				</Grid.Column>
				<Grid.Column width={16}>
					{returnChildByStringKey( props.children, 'EcommerceItemList', EcommerceStoreProps )}
				</Grid.Column>

			</Grid>
		</Grid.Column>

		<Grid.Column width={5}>
			<Grid>
				<Grid.Column width={16}>
					{returnChildByStringKey( props.children, 'EcommerceCart', EcommerceCartProps )}
				</Grid.Column>
			</Grid>
		</Grid.Column>

		
	</Grid>

   
  )
}

export default withRouter(EcommerceLayout)