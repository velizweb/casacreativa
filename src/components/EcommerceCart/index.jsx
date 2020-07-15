import React from 'react'
import { withRouter } from 'react-router-dom'
import EcommerceCartList from '../EcommerceCartList'
import EcommerceCartTotal from '../EcommerceCartTotal'
import EcommerceCheckoutButton from '../EcommerceCheckoutButton'

function index(props) {

      return <div>

                  <EcommerceCartTotal total={props.total}/>
                  <EcommerceCheckoutButton disabled={( props.total < 1)}/>
                  <EcommerceCartList 
                        data={props.data} 
                        onClickDeleteItemCart={props.onClickDeleteItemCart}
                        onQtyChangeHandler={props.onQtyChangeHandler}
                        />
            </div>
}

export default withRouter(index);