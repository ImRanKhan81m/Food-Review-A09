import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='navBar shadow-sm' bg="light" expand="lg">
                <Container className='container'>
                    <Navbar.Brand><Link className='header' to={'/'}><h2><b>Food Review</b></h2></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto items">
                            <CustomLink className='item' to={'/'}>Home</CustomLink>
                            <CustomLink className='item' to={'/review'}>Review</CustomLink>
                            <CustomLink className='item' to={'/dashboard'}>Dashboard</CustomLink>
                            <CustomLink className='item' to={'/blog'}>Blogs</CustomLink>
                            <CustomLink className='item' to={'/about'}>About</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 