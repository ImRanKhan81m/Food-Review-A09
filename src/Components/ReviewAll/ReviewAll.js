import React from 'react';
import './ReviewAll.css'

const ReviewAll = (props) => {
    const { name, about, rating, img } = props.review;
    return (
        <div className="container">
            <div className='review-all'>
                <img src={img} alt="" />
                <p><small>{about}</small></p>
                <h3>{name}</h3>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default ReviewAll;