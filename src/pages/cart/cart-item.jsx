import React,{useContext} from 'react'
import { ShopContext } from '../../Context/Shopcontext';


const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;
    const {cartItems,addToCart,removeFromcart, updateCartItemCount} = useContext(ShopContext);



  return (

    <div className='cartItem'>
        <img src={productImage} />
        <div className='desc'>
            <p><b>{productName}</b></p>
            <p><b>${price}</b></p>
            <div className='countHandler'>
                <button onClick={() => {removeFromcart(id)}}> - </button>
                <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => {addToCart(id)}}> + </button>
            </div>
        </div>
    </div>

    
    
  )
}

export default CartItem;