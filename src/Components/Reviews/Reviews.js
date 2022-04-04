import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewAll from '../ReviewAll/ReviewAll';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <div className="container text-center mt-5">
                <h2>What out Customers say!!</h2>
                <div className='reviews py-5 mt-2'>
                    {
                        reviews.map(review => <ReviewAll
                            key={review._id}
                            review={review}
                        ></ReviewAll>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;