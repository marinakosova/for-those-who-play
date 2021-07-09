import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../train-toy.svg';
import styled from 'styled-components';
import Search from './Search';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper>
                <div className='navbar navbar-dark px-5 col-10 mx-auto'>
                    <Link to='/' className="my-md-2 my-sm-2 my-lg-0">
                        <img src={logo} className='navbar-brand' alt="Tech-free toys and games for kids" height="45" width="45" />
                        <h2 className='navbar-brand align-middle text-uppercase'>4thosewhoplay</h2>
                    </Link>
                    <Search />
                    <ul className='navbar-nav'>
                        <li className='navbar-item'>
                            <Link to='/contact-form' className='nav-link'>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--science-blue) !important;
img.navbar-brand {
    margin-right: .5rem !important;
}
h2 {
    font-family: 'Oswald', sans-serif !important;
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    padding: 0 !important;
    margin-right: 0 !important;
}
.nav-link {
    color: var(--concrete) !important;
    font-size: 1rem;
    :hover {
        color: var(--turquoise) !important;
    }
}
.navbar {
    padding-right: 30px !important;
    padding-left: 30px !important;
}
`;
