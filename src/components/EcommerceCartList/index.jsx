import React from 'react'
import { withRouter } from 'react-router-dom'
import EcommerceCartItem from '../EcommerceCartItem'



function index(props) {
      
       return  <div className={'cartWrapper'}>
                  { props.data.map((item, key)=>{
                        return (
                              <EcommerceCartItem 
                              item={item}
                              onClickAddToCart={props.onClickAddToCart}
                              onClickDeleteItemCart={props.onClickDeleteItemCart}
                              onQtyChangeHandler={props.onQtyChangeHandler}
                              key={key}
                              
                              />
                        )
                  })}
      	</div>
}

export default withRouter(index);