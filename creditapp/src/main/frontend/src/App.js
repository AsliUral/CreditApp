import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import UserForm from "./UserForm";
import CreditResult from "./CreditResult";

const UserProfiles = () => {
  const fetchUserProfiles = () => {
    Axios.get("http://localhost:8080/person/all").then(
      res =>{
        console.log(res);
      }
    )
  }
  useEffect(() => {
    fetchUserProfiles();
  });
  return <h1>Hello</h1>
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <section class="head-nav">
          <a class="logo" href="https://www.kocfinans.com.tr/">
            <img src="https://www.kocfinans.com.tr/assets/img/koc-finans-logo.svg"></img>
          </a>
        </section>
        <Switch>
                <Route exact path="/" component={UserForm} />
                <Route path="/creditResult" component={CreditResult} />
      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
