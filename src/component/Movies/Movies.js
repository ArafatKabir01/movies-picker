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
      const removeItems = [];
      setCart(removeItems);
 
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
            <Cart key={cart.id} clrCartItems={clrCart} cartItems={cart}></Cart>
        </div>    
        </div>
    );
};

export default Movies;