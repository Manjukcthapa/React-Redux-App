import React, { Component } from "react";
import "./App.css";
import PhotoList from "./component/PhotoList";
import Header from "./component/Header";
import styled from "styled-components";

const Wrapper = styled.div`
height:1200px;
width:1000px;
border:2px solid grey;
margin-left:120px;
margin-top:60px;
display: block;
background-color: #061f4a;`

const H1 = styled.h1`
color:white;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      <Wrapper className="App">
      
        <H1>Photo of the day</H1>
        <PhotoList />
      </Wrapper>
      </div>
    );
  }
}

export default App;
