import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './About.css'
import image from '../Assets/images/image.jpg'

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container mt-5">
                <Row>
                    <Col lg='6' md='12'>
                        <div className="image-container">
                            <img src={image} alt="" />
                            <h2 className='text-center mt-4'><b>Kentucky Fried Chicken</b></h2>
                        </div>
                    </Col>
                    <Col lg='6' md='12'>
                        <div className="details-container p-5">
                            <h2><b>Name:</b> Kentucky Fried Chicken</h2>
                            <p><b>Category:</b> Meat,Spicy</p>
                            <p><b>Popular:</b> American</p>
                            <p><b>Tags:</b> Chicken</p>
                            <p><b>Instruction:</b> Preheat fryer to 350°F. Thoroughly mix together all the spice mix ingredients. Combine spice mix with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken. Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs wil.</p>
                            <p><b>Ingredients:</b> Chicken, Oil, Egg White, Flour, Brown Sugar, Salt.</p>
                            <p><b>Measure:</b> 1 whole, 2 quarts neutral frying, 1 1/2 cups , 1 tablespoon, 1 tablespoon, 1 tablespoon, 2 teaspoons, 1 teaspoon.</p>
                            
                            <div className='home-details mt-5'>
                                <a target='blank' href="https://www.youtube.com/watch?v=PTUxCvCz8Bc"><button  onClick={() => navigate('/about')}>See Tutorial</button></a>
                                <button className='mx-5'  onClick={() => navigate('/')}>Go Home</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;