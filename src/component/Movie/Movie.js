import React from 'react';
import './Movie.css'

const Movie = ({movie}) => {
    console.log(movie)
    const {name , img , ticketprice , ratings} = movie
    return (
        <div>
            <div className='card'>
                <img src={img} alt=''></img>
                <div className='movie-info'>
                    <h2>{name}</h2>
                    <p>Ticket Price: ${ticketprice}</p>
                    <p>Rating : {ratings}</p>
                </div>
                <button className='Card-btn'><p>Add to Cart</p></button>
            </div>

        </div>
    );
};

export default Movie;