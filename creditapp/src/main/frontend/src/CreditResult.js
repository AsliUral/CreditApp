import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


class CreditResult extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        let person = this.props.location.state.person;
        let assent = this.props.location.state.result.assent
        let loan = this.props.location.state.result.credit;
        return (
        <div class="jumbotron">
        <h1 class="display-3">Hello, {person.firstName} {} {person.lastName}</h1>
        
            {assent ? <div>
                <p class="lead">Your loan has been approved </p>
                <hr class="my-4"></hr> 
                <p>Loan  : {loan}</p> 
                </div> : <p class="lead">Your loan was not approved </p>}
            
        </div>
        );
    }
}

export default CreditResult;