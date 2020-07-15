import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import EcommerceItem from '../EcommerceItem/Component'
import Env from '../../Env';

function index(props) {

      return  <Grid divided>
                  { props.data.map((item, key)=>{
                        return (
                        <Grid.Column width={props.itemWidth} key={key}>
                              <EcommerceItem 
                                    data={item}  
                                    imageSrc={Env.storage_uri(item.avatar_url)}
                                    onClickAddToCart={props.onClickAddToCart}
                                    onClickDeleteItemCart={props.onClickDeleteItemCart}
                                    />
                        </Grid.Column>)
                  })}
      	</Grid>
}

export default withRouter(index);