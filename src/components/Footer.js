import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer className="footer mt-auto text-muted my-5 pt-5 text-small">
                <div className="container text-center">
                    <p className="mb-1">&copy; 2021 4thosewhoplay</p>
                    <Link to="/contact-form">
                        <p className="mb-0">Contact us</p>
                    </Link>
                </div>
            </FooterContainer>
        )
    }
}

const FooterContainer = styled.footer`

`
