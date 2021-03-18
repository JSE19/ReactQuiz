import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component{
    constructor (props){
        super(props)
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswer: 0,
            wrongAnswer: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount(){
        const {state} = this.props.location;
        this.setState({
            score: (state.score/state.numberOfQuestions)*100,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            numberOfUnansweredQuestions: state.numberOfAnsweredQuestions - (state.correctAnswers + state.wrongAnswers),
            correctAnswers:state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            hintsUsed: state.hints,
            fiftyFiftyUsed: state.fiftyFiftyUsed
        });
    }

    render(){
        const { state } = this.props.location;
        const userScore = this.state.score;
        
        let stats, remark;
       
        if(!state){
            window.location.replace('/')
        } 
        
        if(userScore <= 30){
            console.log(state);
            remark ="You Need More Practice";
        } else if(userScore > 30 && userScore <= 50){
            remark = "Good, But You Need More Pracice";
        } else if(userScore > 50 && userScore <= 70 ){
            remark = "Very Good!!!"
        } else if(userScore > 70){
            remark = "Excellent !!!";
        }

        if(state !== undefined){
            stats = (
                <Fragment>
                    <div>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Quiz Has Ended !!!</h1>
                    <div className="container">
                        <h4>{remark}</h4>
                        <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left"> Total Number of Questions: </span>
                        <span className="right">{this.state.numberOfQuestions}</span>
                        <br/>
                        <span className="stat left"> Total Number of Attempted Questions: </span>
                        <span className="right">{this.state.numberOfAnsweredQuestions}</span>
                        <br/>
                        <span className="stat left"> Total Number of UnAttempted Questions: </span>
                        <span className="right">{this.state.numberOfUnansweredQuestions}</span>
                        <br/>
                        <span className="stat left"> Total Number of correctAnswer: </span>
                        <span className="right">{this.state.correctAnswers}</span>
                        <br/>
                        <span className="stat left"> Total Number of Wrong Answers: </span>
                        <span className="right">{this.state.wrongAnswers}</span>
                        <br/>
                        <span className="stat left"> Total Number of Hints Used: </span>
                        <span className="right">{this.state.hintsUsed}</span>
                        <br/>
                        <span className="stat left"> Total Number of fiftyFiftyUsed: </span>
                        <span className="right">{this.state.fiftyFiftyUsed}</span>
                        <br/>
                        
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to='/'> Back to Home </Link>
                                <Link to='/play/quiz'> Play Again </Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
                
                
            );
        }else{
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to='/'> Back to Home </Link>
                            <Link to='/play/quiz'> Play Again </Link>
                        </li>
                    </ul>
                </section>
            
            );
        }
        return(
            <Fragment>
                <Helmet>
                    <title>Quiz App - Summary </title>
                </Helmet>
                {stats}
            </Fragment>
        );
    }

}

export default QuizSummary;