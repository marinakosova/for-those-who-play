import React, { Component } from 'react';
import slider2 from '../slider2.jpg';
import styled from 'styled-components';

export default class Carousel extends Component {
    render() {
        return (
            <CarouselWrapper className="container mt-5">
                <div className="jumbotron p-3 p-md-3 mb-3 col-10 mx-auto text-white rounded" style={{ backgroundImage: `url(${slider2})`, backgroundSize: 'cover', marginBottom: 0 }}>
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Explore screen-free things to keep kids busy without screen time</h1>
                        <p className="lead my-3">Best ideas that encourage your child to do something constructive</p>
                    </div>
                </div>
            </CarouselWrapper>
        )
    }
}

const CarouselWrapper = styled.div`
h1 {
    padding: 1rem;
    background-color: var(--curious-blue);
    font-size: 2.5rem;
    text-shadow: 3px 0px 7px rgba(75,124,150,0.8), 
	  -3px 0px 7px rgba(75,124,150,0.8), 
	  0px 4px 7px rgba(75,124,150,0.8);
}
p {
    padding: 1rem;
    background-color: var(--curious-blue);
    font-size: 1.5rem;
    text-shadow: 3px 0px 7px rgba(75,124,150,0.8), 
	  -3px 0px 7px rgba(75,124,150,0.8), 
	  0px 4px 7px rgba(75,124,150,0.8);
}
/* #carouselExampleIndicators {
    height: auto;
  width: auto;
  overflow: hidden;
} */
`


