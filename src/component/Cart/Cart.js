import React from 'react';
import SelectedMovie from '../SelectedMovies/SelectedMovie';
import './Cart.css'

const Cart = ({cartItems , clrCartItems,selectOne}) => {
     if(cartItems.length >= 5){
         alert('Only 4 movies you can select')
        
     };

    return (
        <div className='selected-items'>
            <h2>Selected Movies</h2>
            <div className='selected-movies'>
                {
                    cartItems.map(cart => <SelectedMovie key={cart.id} cart ={cart}></SelectedMovie>)
                }
                

            </div>
            <div className='error-msg' id='errorText'></div>
            <div className='catr-buttons'>
            <button  onClick={()=> selectOne()} className='cart-btn'><p>Choose One</p></button>
            <button onClick={()=> clrCartItems()} className='cart-btn'><p>Choose Again</p></button>
            </div>
        
            

            
        </div>
    );
    
};

export default Cart;