import React from 'react'
import './Product.css';

function Product() {
  return (
    <div className='product'>
        <div className="product__info">
            <p>The learn startup</p>
            <p className='product_price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
         <div className="product_rating">   
            <p>🌟</p>    
         </div>
        </div>
         <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" />
         <button>Add To Cart</button>
    </div>
  )
}

export default Product