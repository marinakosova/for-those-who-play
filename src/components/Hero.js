import React, { Component } from 'react';
import styled from 'styled-components';

class Hero extends Component {
    render() {
        return (
            <CarouselWrapper>
                <div className="jumbotron jumbotron-bg col-10 mx-auto">
                    <h2 className="display-4 text-center">
                        Explore tech-free things to keep kids busy without screen time
                </h2>
                    {/* <p className="lead">It’s easy to plop the kids in front of the TV or park them on the couch with a device on their laps when you’ve got stuff to do. Will it keep them busy and distracted and prevent them from getting underfoot? Definitely. But will it turn them into little zombie people? Maybe a touch.</p>
                    <p className="lead font-weight-bold">The lure of a screen is tempting for everyone, but if you’re looking for your kids to do something a little less sedentary and a lot more productive, here are some ideas you can both feel good about.</p> */}
                </div>
            </CarouselWrapper>
        );
    }
}

export default Hero;

const CarouselWrapper = styled.div`
.jumbotron {
    margin-bottom: 0;
    padding: 2rem;
    background-color: transparent;
}
h2 {
    font-family: 'Oswald', sans-serif;
}
`
