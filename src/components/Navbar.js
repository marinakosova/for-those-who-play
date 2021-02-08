import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../train-toy.svg';
import styled from 'styled-components';
import Search from './Search';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-5'>
                <Link to='/'>
                    <img src={logo} className='navbar-brand' alt="Tech-free toys and games for kids" height="45" width="45" />
                    <h2 className='navbar-brand align-middle text-uppercase'>4thosewhoplay</h2>
                </Link>
                <ul className='navbar-nav ml-5'>
                    <li className='navbar-item'>
                        <Link to='/' className='nav-link'>They’ll love these</Link>
                    </li>
                </ul>
                <Search />
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
    font-size: 1.4rem;
    :hover {
        color: var(--turquoise) !important;
    }
}
.navbar {
    padding-right: 30px !important;
    padding-left: 30px !important;
}
`;
