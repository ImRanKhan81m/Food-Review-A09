import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <Row className='pt-5 mt-3'>
                    <Col>
                        <div className="first-question p-5">
                            <h3>1) What is Context Api?</h3>
                            <p><b>Answer:</b> The Context API is a React structure that enables to exchange unique details and assists in solving prop-drilling from all levels of Application. Context provides a way to pass data through the component tree without having to pass props down manually at every level. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="second-question p-5">
                            <h3>2) What is the Semantic Tag?</h3>
                            <p><b>Answer:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sit temporibus cupiditate, culpa quod esse ipsum quia illo optio nihil illum commodi dolores debitis accusantium cum laborum nulla veniam maiores officiis exercitationem eveniet dolor quibusdam natus. Hic vero omnis iste recusandae? Veritatis sit distinctio tenetur iusto doloribus officiis ullam similique qui excepturi, reprehenderit veniam, obcaecati cumque et molestiae ipsum ex expedita natus dolor adipisci rem quibusdam accusantium maiores sint. Ullam aspernatur rerum distinctio voluptatibus! Corporis consequuntur ipsa, ut temporibus dolorem distinctio natus at odio repellendus quisquam doloribus blanditiis laboriosam modi! Aliquam quidem dolorem tempora sequi doloribus recusandae laudantium sunt quo?</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;