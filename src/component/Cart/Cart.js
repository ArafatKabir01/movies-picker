import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

    return (
        <div className='selected-items'>
            <h2>Selected Movies</h2>
            <div className='selected-movies'>

            </div>
            <button className='cart-btn'><p>Choose One</p></button>
            <button className='cart-btn'><p>Choose Again</p></button>
            

            
        </div>
    );
};

export default Cart;