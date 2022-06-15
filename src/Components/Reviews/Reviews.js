import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewAll from '../ReviewAll/ReviewAll';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className="container text-center mt-5 py-5">
            <h1 className='my-3 '>What Our Customers Say!!</h1>
            <div className='reviews py-3 mt-2'>
                {
                    reviews.map(review => <ReviewAll
                        key={review._id}
                        review={review}
                    ></ReviewAll>)
                }
            </div>
        </div>
    );
};

export default Reviews;