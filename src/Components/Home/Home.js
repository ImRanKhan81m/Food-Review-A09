import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import image from '../Assets/images/home-img-2.png'
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import CustomReview from '../CustomReview/CustomReview';

const Home = () => {
    const [reviews] = useReviews();
    const customReview = reviews.slice(0,3);

    const navigate = useNavigate();
    return (
        <>
            <div>
                <section>
                    <Container>
                        <Row>
                            <Col lg='6' md='6' className='d-flex align-items-center'>
                                <div className='home-details'>
                                    <p><span>Our Special Dish</span></p>
                                    <h1>Fried Chicken</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique dicta praesentium asperiores.</p>
                                    <button onClick={() => navigate('/about')}>Recife</button>
                                </div>
                            </Col>
                            <Col lg='6' md='6' className='img-container'>
                                <div>
                                    <img src={image} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <div className="container text-center review-items">
                        <h1><b>Customer Reviews: {customReview.length}</b></h1>
                        <div className='reviews mt-5'>
                            {
                                customReview.map(review => <CustomReview
                                    key={review._id}
                                    review={review}></CustomReview>)
                            }
                        </div>
                        <button className='mt-3 mb-5' onClick={() => navigate('/review')}>See All Reviews</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;