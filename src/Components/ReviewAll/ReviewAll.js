import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewAll.css'

const ReviewAll = (props) => {
    const { name, about, rating, img } = props.review;
    return (
        <div className="container">
            <div className='review-all'>
                <img src={img} alt="" />
                <p><small>{about}</small></p>
                <h4>{name}</h4>
                <h6>{rating >=4 ? <span><FontAwesomeIcon className='rating-star' icon={faStar}/><FontAwesomeIcon className='rating-star' icon={faStar}/><FontAwesomeIcon className='rating-star' icon={faStar}/><FontAwesomeIcon className='rating-star' icon={faStar}/><FontAwesomeIcon className='rating-star' icon={faStar}/></span> : <span><FontAwesomeIcon className='rating-star' icon={faStar}/><FontAwesomeIcon className='rating-star' icon={faStar}/><FontAwesomeIcon className='rating-star' icon={faStar}/></span> }</h6>
            </div>
        </div>
    );
};

export default ReviewAll;