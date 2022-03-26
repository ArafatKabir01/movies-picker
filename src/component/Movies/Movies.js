import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Movies.css'

const Movies = () => {
    const [movies , setMovies] = useState([]);
    useEffect(()=>{
      fetch('movies.json')
      .then(res => res.json())
      .then(data => setMovies(data))
    },[])
    return (
        <div className='movie-container' >
            <div className='movies-section'>
            {movies.map(movie => <Movie
                        key={movie.id}
                        movie={movie}
            ></Movie>)}
            </div>
        <div className='cart-section'>
            <Cart></Cart>
        </div>    
        </div>
    );
};

export default Movies;