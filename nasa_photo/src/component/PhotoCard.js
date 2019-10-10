import React from "react";
import styled from "styled-components";

const Photo = styled.img`
  height: 550px;
  width: 700px;
  margin-left: 40px;
  margin-top: 80px;
  
`;

const H1 = styled.h1`
color:white;
`

const P = styled.p`
width: 90%;
font-family: italic;
margin-left:20px;
padding: 5px;
font-size: 22px;
color:white
`

const PhotoCard = props => {
  return (
    <div>
      <Photo src={props.photo.hdurl} alt="" />
      <H1>{props.photo.date}</H1>
      <H1>{props.photo.copyright}</H1>
      <P>{props.photo.explanation}</P>
    </div>
  );
};

export default PhotoCard;
