import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <ListContainer className="py-5">
                    <div className="container">
                        <Title name="shopping" title="guide" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    let filteredProducts = value.products.filter((item) => {
                                        return item.title.toLowerCase().indexOf(value.search.toLowerCase()) !== -1
                                            || ((typeof item.keywords == 'string') && item.keywords.toLowerCase().indexOf(value.search.toLowerCase()) !== -1);
                                    });
                                    return filteredProducts.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </ListContainer>
            </React.Fragment>
        )
    }
}

const ListContainer = styled.div`

`
