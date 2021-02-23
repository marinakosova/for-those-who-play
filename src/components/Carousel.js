import React, { Component } from 'react';
//import slider from '../slider.jpg';
//import sliderTwo from '../slider-two.jpg';
//import sliderThree from '../slider-three.jpg';
import slider2 from '../slider2.jpg';
import styled from 'styled-components';

export default class Carousel extends Component {
    render() {
        return (
            <CarouselWrapper className="container mt-5">
                <div className="jumbotron p-3 p-md-3 text-white rounded" style={{ backgroundImage: `url(${slider2})`, backgroundSize: 'cover', marginBottom: 0 }}>
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Explore screen-free things to keep kids busy without screen time</h1>
                        <p className="lead my-3">Best 100+ ideas that encourage your child to do something constructive</p>
                    </div>
                </div>
                {/* ////// */}
                {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slider} alt="Ideas to keep kids busy" height="426px" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="text-title display-5">
                                    Best tech-free toys and games that help to raise a low media child
                                </h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={sliderTwo} alt="Ideas to keep kids busy" height="426px" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-title display-5">
                                    Explore screen-free things to keep kids busy without screen time
                                </h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={sliderThree} alt="Ideas to keep kids busy" height="426px" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-title display-5">
                                    100+ ideas that encourage your child to do something constructive
                                </h2>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}
            </CarouselWrapper>
        )
    }
}

const CarouselWrapper = styled.div`
/* img {
    opacity: .9;
} */
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


