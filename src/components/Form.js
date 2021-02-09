import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Form extends Component {
    render() {
        return (
            <DivContainer className="py-5">

                <h2 className="text-title mb-4">
                    Contact us
                </h2>
                {/* <h5>
                    Do you have something you’d like to let us know? Whether you have a comment or an idea to share, we look forward to hearing from you.
                </h5> */}

                <form name="contact v1"
                    method="POST"
                >

                    <input type="hidden" name="form-name" value="contact v1" />

                    <div hidden>
                        <input name="bot-field" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="first-name">First name*: </label>
                        <input
                            className="form-control"
                            type="text"
                            name="first-name"
                            required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last-name">Last name:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="last-name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email*:</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            required />
                    </div>

                    <div className="form-group">
                        <label>Message*:</label>
                        <textarea
                            className="form-control"
                            name="message"
                            cols="30"
                            rows="10"
                            required >
                        </textarea>
                    </div>

                    <div className="form-group">
                        <Link to='/'>
                            <button type="button" className="btn btn-lg mt-auto text-capitalize button-back mr-2">back to products</button>
                        </Link>
                        <button className="btn btn-lg mt-auto text-capitalize button-send mr-2" type="submit" >send a message</button>
                    </div>
                </form>
            </DivContainer>
        )
    }
}

const DivContainer = styled.div`
max-width: 550px;
    margin: 0px auto;
    font-size: 1.25rem;
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
.button-send {
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
