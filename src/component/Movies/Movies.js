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
    const randomSelection = () => {
        const randomNum =Math.floor( Math.random()*4);
        console.log(randomNum)
        console.log(cart[0])
      const randimItems = [cart[randomNum]];
      console.log(randimItems)
      setCart(randimItems);

 
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