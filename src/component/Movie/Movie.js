import React from 'react';
import './Movie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Movie = (props) => {
    const {name , img , ticketprice , ratings} = props.movie
    return (
        <div>
            <div className='card'>
                <img src={img} alt=''></img>
                <div className='movie-info'>
                    <h2>{name}</h2>
                    <p>Ticket Price: ${ticketprice}</p>
                    <p>Rating : {ratings}</p>
                </div>
                <button onClick={()=> props.eventHendler(props.movie)} className='Card-btn'><p>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>

        </div>
    );
};

export default Movie;