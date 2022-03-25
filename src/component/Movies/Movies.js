import React from 'react';
import { useEffect, useState } from 'react';
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
        <div>
            {movies.map(movie => <Movie
                        key={movie.id}
                        movie={movie}
            ></Movie>)}
        </div>
    );
};

export default Movies;