import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';
import { withRouter,useHistory } from 'react-router-dom';
const CreditCalculateFunctions = require("./CreditCalculateFunctions");


class UserForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {firstName:"", lastName:"", id:0, phoneNumber:0,income:0,person:null,creditScore:null,creditObj:null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        if(event.target.id ==="firstName"){
            this.setState({firstName: event.target.value});
        }else if(event.target.id ==="lastName"){
            this.setState({lastName: event.target.value});
        }else if(event.target.id ==="id"){
            this.setState({id: event.target.value});
        }else if(event.target.id ==="phoneNumber"){
            this.setState({phoneNumber: event.target.value});
        }else if(event.target.id ==="income"){
            this.setState({income: event.target.value});
        }
    }

    routingFunction = () => {
        let result = CreditCalculateFunctions(this.state.creditScore,this.state.person);
        
        let obj= {
            "person":this.state.person,
            "credit":result.credit,
            "assent":result.assent,
        }


        Axios.get(`http://localhost:8080/creditRequest/all`).then(
            res =>{
                this.setState({creditObj: res.data});
                    if(this.state.creditObj === null){
                        if(obj){
                            Axios.post(`http://localhost:8080/creditRequest/`, 
                                obj
                            ,{headers: {"Content-Type": "application/json"}}
                            ).then(
                            res =>{
                        console.log("credit request olacak bu",res.data);
                        })
                        }
                    }
        })
        
        if(this.state.creditObj){
            if(this.state.creditObj.id != this.state.person.id){
                if(obj){
                    Axios.post(`http://localhost:8080/creditRequest/`, 
                        obj
                    ,{headers: {"Content-Type": "application/json"}}
                    ).then(
                    res =>{
                console.log("credit request olacak bu",res.data);
                })
                }
            }
        }

        this.props.history.push({
            pathname: "/creditResult",
            state: {
                person:this.state.person,
                creditScore:this.state.creditScore,
                result:result
            }
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);       
        Axios.get(`http://localhost:8080/person/`+ this.state.id).then(
            res =>{
        console.log("Kullanıcı",res.data);
            this.setState({person: res.data});
        })
        Axios.get(`http://localhost:8080/person/`+ this.state.id).then(
            res =>{
        console.log("Kullanıcının kayıtlı olan credi skoru",res.data.creditScoreService);
        this.setState({creditScore: res.data.creditScoreService});
        })
    }
    

    render() {
        return (
        <div>
            <Form onSubmit={this.handleSubmit}>
            <span
                    className="block-example border border-danger rounded mb-0"
                    style={{width: "700px",
                    margin: "auto",
                    display: "block",
                    align: "center",}}
                >
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            id="firstName"
                            placeholder="Enter firstName"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            id="lastName"
                            placeholder="Enter lastName"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            id="id"
                            placeholder="Enter id"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Income</Form.Label>
                        <Form.Control
                            id="income"
                            type="number"
                            placeholder="Enter income"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            id="phoneNumber"
                            placeholder="Enter phoneNumber"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <div class="row justify-content-center">
                    <Button
                        variant="danger"
                        type="submit"
                        style={{ display: "block", align: "center" }}
                    >
                        Submit
                    </Button>
                    </div>
                    
                    {this.state.person && this.state.creditScore? this.routingFunction(): null}
                </span>
            </Form>
        </div>
        );
    }
}

export default UserForm;