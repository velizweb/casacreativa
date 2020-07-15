import React, { useState } from 'react'
import CartContex from './CartContext'


const CartProvider = ({ children }) => {
  


  const [CartDetail, setCartDetail] = useState({
		items : [],
		total : 0
	})

  const obj = {
    ...CartDetail,
    setCartDetail
    
  }
  

  return (
    <CartContex.Provider value={obj}>
      {children}
    </CartContex.Provider>
  )
}

export default CartProvider
