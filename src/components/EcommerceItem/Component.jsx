
import React from 'react';
import { Icon, Button } from 'semantic-ui-react'
require ('./style.css')

function Index(props) {

      return  <div className={'productListItemWrapper'}>
                  <div className={'productListItemTitleWrapper'}>
                        <h5 className={'productListItemTitle'}>{props.data.product_name}</h5>
                        <b>{props.data.price}</b>
                  </div>
                  <div className={'productListItemDescriptionWrapper'}>
                        <p className={'productListItemDescription'}>{props.data.description}</p>
                  </div>
                  <div className={'productThumbWrapper'} style={{backgroundImage : `url('${props.imageSrc}')`}}>
                        <Button positive onClick={()=>props.onClickAddToCart(props.data)} size='tiny'>
                              <Icon name='add' />
                        </Button>
                  </div>
                  
                  
            </div>
}

export default Index;
