import React from 'react'
import { Products } from '../../Products'
import Product from './Product'
import './shop.css'

const shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Bangla Bazar</h1>
        </div>
        <div className='products'>
          {
          Products.map((product)=> (<Product data={product} />))
          }
        </div>
    </div>
  )
}

export default shop