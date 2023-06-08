import React, {useContext} from 'react'
import { Products } from '../../Products'
import { ShopContext } from '../../Context/Shopcontext';
import CartItem from './cart-item';
import './cart.css'
import { useNavigate } from 'react-router-dom';



const Cart = () => {
const {cartItems, getTotalCartAmount} = useContext(ShopContext);
const totalAmount = getTotalCartAmount();
const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart items : </h1>
      </div>
      <div className='cartItems'>
        {
          Products.map((product) => {
            if (cartItems[product.id] !== 0)
            {
              return <CartItem data={product} />
            }
          })
        }
      </div>

      {totalAmount > 0 ?
      <div className='checkout'>
            <h3>Total : $ {totalAmount}</h3>
            <button onClick={() => navigate("/")}>Countinue Shopping</button>
            <button>Checkout</button>
        </div> : (<h1>Your Cart is Empty</h1>) }
    </div>
  )
}

export default Cart