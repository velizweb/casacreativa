import React,{useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Product from '../API/Product'
import getFatherProps from '../Helpers/GetFatherProps'


function EcommerceStoreController( props ) {
      
      
      const company_id  = props.match.params.company_id
      const [ EcommerceStoreItems, setEcommerceStoreItems ] = useState([])
      const [ Loading, setLoading ] = useState(true)
      

      

      const childrenProps = {
            ...getFatherProps(props),
            EcommerceStoreProps : {
                  EcommerceStoreItems,
                  Loading
            }
      }

      

      const Children = React.Children.map(props.children,(child)=>{
            return React.cloneElement(child,childrenProps)
      })



      useEffect(()=>{
            Product.list(company_id).then(response => {
                  setEcommerceStoreItems(response.data)
                  setLoading(false)
                })
                .catch(error => {
                  setLoading(false)
                });
      },[company_id])
      

      return  Children


}

export default withRouter(EcommerceStoreController);
