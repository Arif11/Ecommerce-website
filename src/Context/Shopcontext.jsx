import React,{createContext, useState} from 'react'
import { Products } from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () =>
{
  let cart = {};
  for(let i = 1; i < Products.length + 1 ; i++)
  {
    cart[i] = 0; 
  }
  return cart;
}



const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () =>
  {
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0) 
      {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }

  const addToCart = (itemId) =>
  {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };

  const removeFromcart = (itemId) =>
  {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  };

  const updateCartItemCount = (newAmount, itemId) =>
  {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  }

  const contextValue = {cartItems, addToCart, removeFromcart, updateCartItemCount, getTotalCartAmount }



  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;