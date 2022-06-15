import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div style={{minHeight:'86vh'}} className=' mt-5 py-5'>
            <div className="container">
                <Row>
                    <Col lg='6' md='12'>
                        <div className="first-question p-lg-5 p-2">
                            <h3>1) What is Context Api?</h3>
                            <p><b>Answer:</b> The Context API is a React structure that enables to exchange unique details and assists in solving prop-drilling from all levels of Application. Context provides a way to pass data through the component tree without having to pass props down manually at every level. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                        </div>
                    </Col>
                    <Col lg='6' md='12'>
                        <div className="second-question p-lg-5 p-2">
                            <h3>2) What is Semantic Tag?</h3>
                            <p><b>Answer:</b> Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that are using that text as an example of the code for the purposes of an article.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;