import React from 'react';
import './SelectedMovie.css'

const SelectedMovie = ({cart}) => {
    return (
        <div >
            <div className='selectedCartItems'>
                <img src={cart.img}></img>
                <h4>{cart.name}</h4>   
            </div>
       
        </div>
    );
};

export default SelectedMovie;