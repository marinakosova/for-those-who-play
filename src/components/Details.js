import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { title, img, link, age, company, info } = value.detailProduct;
                    return (
                        <DetailsContainer className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-title text-curious-blue text-center text-capitalize font-weight-bold my-5">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        company: {company}
                                    </h4>
                                    <h4 className="text-curious-blue">Age: {age}</h4>
                                    <p className="font-weight-bold mt-3 mb-0">
                                        Some info about product:</p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div className="button-center my-2">
                                        <Link to='/'>
                                            <button type="button" className="btn btn-lg mt-auto text-capitalize button-back mr-2">back to products</button>
                                        </Link>
                                        <a href={link} className="btn btn-lg mt-auto button-shop text-capitalize" role="button" rel="noopener noreferrer">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </DetailsContainer>
                    );
                }}
            </ProductConsumer>
        )
    }
}

const DetailsContainer = styled.div`
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
.button-shop {
    background-color: transparent;
    color: var(--california);
    border: 1px solid var(--california);
    outline: none;
    :hover {
        background-color: var(--california);
        color: var(--shark);
        border: 1px solid var(--california);
    }
}
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
`
