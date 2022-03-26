import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Movies.css'

const Movies = () => {
    const [movies , setMovies] = useState([]);
    const [cart , setCart] = useState([])
    useEffect(()=>{
      fetch('movies.json')
      .then(res => res.json())
      .then(data => setMovies(data))
    },[])
    const handleAddToCart = (movie) => {
        const newCart = [...cart,movie]
        setCart(newCart);
    };
    
    const clrCart = () => {
    const errorMsg = document.getElementById('errorText');
    errorMsg.style.display='none';
      const removeItems = [];
      setCart(removeItems);
 
      }
    const randomSelection = () => {
        const errorMsg = document.getElementById('errorText');
        if(cart.length == 4){
            errorMsg.innerHTML=``;
            const randomNum =Math.floor( Math.random()*4);
            const randomItems = [cart[randomNum]];
            setCart(randomItems);
        }
        else{
            errorMsg.style.display='block';
            errorMsg.innerHTML=`<p>Please minimum select 4 movies</p>`;
        }
      }
    return (
        <div className='movie-container' >
            <div className='movies-section'>
            {movies.map(movie => <Movie
                        key={movie.id}
                        movie={movie}
                        eventHendler ={handleAddToCart}
            ></Movie>)}
            </div>
        <div className='cart-section'>
            <Cart key={cart.id} clrCartItems={clrCart} selectOne ={randomSelection} cartItems={cart}></Cart>
        </div>    
        </div>
    );
};

export default Movies;