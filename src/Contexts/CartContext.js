import { createContext } from 'react'

const CartContext = createContext({
  setCartContext: CartDetail => {}
})

export default CartContext