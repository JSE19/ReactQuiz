import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

const Quizinstructions = () =>(
    <Fragment>
        <Helmet><title> Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1> How to Play the Game</h1>
            <p>Ensure you read this guide from start to finish. </p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 90 minutes</li>
                <li> Each game consists of 60 questions. </li>
                <li>Every question contains 4 options</li>
            </ul>
            <div>
                <span className="left"><Link to="/">No Take Me Back</Link></span>
                <span className="right"><Link to="/play/quiz">Okay Let's Do LThis </Link></span>
            </div>
            
        </div>
    </Fragment>
    
);
export default Quizinstructions;