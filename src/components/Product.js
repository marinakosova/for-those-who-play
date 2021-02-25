import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        const { id, title, img, link, age } = this.props.product;
        return (
            <ProductWrapper className="col-lg-4 col-md-6 col-sm-6 p-md-5 py-4">
                <div className="card text-center h-100">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container pt-5 pb-3 pr-5 pl-5"
                                onClick={() =>
                                    value.handleDetail(id)
                                }
                            >
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div>
                                        <Link to="/details">
                                            <h5 className="align-self-center mb-0 card-title pt-4 pb-2">{title} (Age: {age})</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ProductConsumer>
                    <a href={link} className="btn btn-block btn-lg btn-primary mt-auto" role="button" rel="noopener noreferrer">Shop now</a>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        age: PropTypes.string
    }).isRequired
}

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all .5s linear;
    :hover {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
}
a {
    color: var(--curious-blue);
}
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
a.btn {
    background-color: var(--california);
        color: var(--shark);
        border: 1px solid var(--california);
    outline: none;
    :hover {
        background-color: var(--science-blue);
        border: 1px solid var(--science-blue);
        color: #fff;
    }
}
.img-container {
    overflow: hidden;
    overflow: -moz-hidden-unscrollable;
}
.card-img-top {
    transition: all .5s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
}
`;

