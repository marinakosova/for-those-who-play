import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

const Div = styled.div`
font-family: 'Roboto', sans-serif;
:hover {
    text-decoration: none;
}
`;

export default class Search extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    //console.log(value.searchHandler);
                    return (
                        <Div className="form-inline my-md-2 my-sm-2 my-lg-0">
                            <input className="form-control" type="text"
                                placeholder="Search" aria-label="Search" defaultValue={value.search}
                                onChange={value.searchHandler} />
                        </Div>
                    )
                }}
            </ProductConsumer>
        )
    }
}


