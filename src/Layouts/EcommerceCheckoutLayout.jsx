import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'
import returnChildByStringKey from '../Helpers/returnChildByStringKey'
import { withRouter } from 'react-router-dom'

function EcommerceCheckoutLayout (props){
	    
	
  	const headerTitle = `Tienda en linea`
	  const headerSubtitle = `Verifica la orden antes de procesarla`
	  
	const noItemsHeader = `No hay elementos`
  	const noItemsSubHeader = `No hay elementos agregados al carrito de compra`

	const EcommerceCartProps = {
		data : props.EcommerceCartProps.CartDetail.items,
		total : props.EcommerceCartProps.CartDetail.total,
		onClickDeleteItemCart : props.EcommerceCartProps.onClickDeleteItemCart,
		onQtyChangeHandler : props.EcommerceCartProps.onQtyChangeHandler,
		onCancelCartHandler : props.EcommerceCartProps.onCancelCartHandler,
		onPayoutHandler : props.EcommerceCartProps.onPayoutHandler,
		
	}

	if(!props.EcommerceCartProps.CartDetail.items.length){
		return <Segment>
					<center>
						<h2 style={{marginBottom:'0px'}}>{noItemsHeader}</h2>
						<p style={{marginTop:'0px'}}>{noItemsSubHeader}</p>
						{returnChildByStringKey( props.children, 'EcommerceChekoutReturnButton')}
					</center>
				
			</Segment>
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
					<Segment>
						{returnChildByStringKey( props.children, 'EcommerceCartList', EcommerceCartProps )}
					</Segment>		
				</Grid.Column>

			</Grid>
		</Grid.Column>
		<Grid.Column width={5}>
			<Segment>
				{returnChildByStringKey( props.children, 'EcommerceCartTotal', EcommerceCartProps )}
				{returnChildByStringKey( props.children, 'EcommercePayoutButton', EcommerceCartProps)}
			</Segment>
			<Segment>
				{returnChildByStringKey( props.children, 'EcommerceDeleteOrderButton', EcommerceCartProps)}
			</Segment>
			<Segment>
				{returnChildByStringKey( props.children, 'EcommerceChekoutReturnButton')}
			</Segment>
			
			
			
		</Grid.Column>
	</Grid>

   
  )
}

export default withRouter(EcommerceCheckoutLayout)