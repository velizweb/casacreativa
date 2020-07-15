
import React from 'react';
import { Icon, Input } from 'semantic-ui-react'
require('./style.css')

function Index(props) {

      return  <div>
                  <div className={'cartItemWrapper'}>
                        <div className={'cartItemQty'}>
                              <Input 
                                    control='input'
                                    name='qty'
                                    type="text" 
                                    value={props.item.qty}
                                    onChange={(e)=>props.onQtyChangeHandler(e.target.value,e.target.name, props.item)}
                                    />
                  
                        </div>
                        <div className={'cartItemInfo'}>
                              <span className={'cartItemTitle'}>{props.item.product_name}</span>
                              <span className={'cartItemPrice'}>P/U {props.item.price}</span>
                              <span className={'cartItemTotal'}>Total: {props.item.total}</span>
                        </div>
                        <div className={'cartItemRemove'}>
                              <span>
                                    <Icon name='remove' onClick={()=>props.onClickDeleteItemCart(props.item)}/>
                              </span>
                        </div>
                  </div>
            </div>
}

export default Index;