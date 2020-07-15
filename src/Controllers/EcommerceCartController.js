import React,{useContext, useState} from 'react'
import { withRouter } from 'react-router-dom'
import getFatherProps from '../Helpers/GetFatherProps'
import CartContext from '../Contexts/CartContext'
import UserShoppingRecords from '../API/UserShoppingRecords'

function EcommerceController( props ) {
      

      const [Loading , setLoading] = useState(false)
      const CartDetail = useContext(CartContext)
      const { setCartDetail } = useContext(CartContext)
      const company_id  = props.match.params.company_id

      const childrenProps = {
            ...getFatherProps(props),
            EcommerceCartProps : {
                  Loading,
                  CartDetail,
                  onClickAddToCart,
                  onClickDeleteItemCart,
                  onQtyChangeHandler,
                  onPayoutHandler,
                  onCancelCartHandler,
            }
      }

      

      const Children = React.Children.map(props.children,(child)=>{
            return React.cloneElement(child,childrenProps)
      })


      function onPayoutHandler(){

            const data  = CartDetail

            UserShoppingRecords.checkout(company_id, data).then(response => {
                  setCartDetail({
                        items : [],
                        total : 0
                  })
                  props.history.push(`/model/ecommerce/checkout/success/${company_id}`)

                })
                .catch(error => {
                  setLoading(false)
                });
            console.log('pagando')
      }


      function onCancelCartHandler(){
            setCartDetail({
                  items : [],
                  total : 0
            })
      }

      function getCartTotal(items){

            let total = 0

            items.map((item, key)=>{
                  total += item.total
                  return true
            })

            return total
      }

      function onQtyChangeHandler(value, name, item){

            if(!parseInt(value)){
                  value = 0
            }

            let tempCartDetailItems = CartDetail.items
            let result = []
            tempCartDetailItems.map((array_item, key)=>{
                  if(array_item.id === item.id){
                        array_item.qty = parseInt(value)
                        array_item.total = array_item.qty * array_item.price
                        result.push(array_item)
                  }else
                  {
                        result.push(array_item)
                  }

                  return true
            })

            setCartDetail({
                  items : result,
                  total : getCartTotal(result)
            })
      }

      function onClickDeleteItemCart(item){


            let tempCartDetailItems = CartDetail.items
            let result = []
            tempCartDetailItems.map((array_item, key)=>{
                  if(array_item.id !== item.id){
                        result.push(array_item)
                  }
                  return true
            })

            setCartDetail({
                  items : result,
                  total : getCartTotal(result)
            })
            
      }

      function onClickAddToCart(item){
        
            let tempCartDetailItems = CartDetail.items
     

            let exist = false;
            CartDetail.items.map((array_item, key)=>{
                  if(array_item.id === item.id){
                        exist = true                              
                  }
                  return true
            })

            if(exist){
                  
                  tempCartDetailItems.map((array_item, key)=>{
                        if(array_item.id === item.id){
                              array_item.qty++
                              array_item.total = array_item.qty * array_item.price
                        }
                        return array_item
                  })

            }else
            {     
                  item.qty = 1
                  item.total = item.qty * item.price
                  tempCartDetailItems.push(item);
            }


            setCartDetail({
                  items : tempCartDetailItems,
                  total : getCartTotal(tempCartDetailItems)
            })

           
      }

      return  Children


}

export default withRouter(EcommerceController);
