import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Success extends Component {
    render() {
        return (
            <SuccessContainer>
                <p>Thank you for your submission.</p>
                <Link to='/'>
                    <button type="button" className="btn btn-lg mt-auto text-capitalize button-back mr-2">back to products</button>
                </Link>
            </SuccessContainer>
        )
    }
}

const SuccessContainer = styled.div`
.button-back {
    background-color: transparent;
    color: var(--curious-blue);
    border: 1px solid var(--curious-blue);
    outline: none;
    :hover {
        background-color: var(--science-blue);
        color: #fff;
        border: 1px solid var(--science-blue);
    }
}
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
`
