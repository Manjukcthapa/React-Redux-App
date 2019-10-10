import React from "react";

const PhotoCard = props => {
  return (
    <div>
      <h1>{props.photo.date}</h1>
      <h1>{props.photo.copyright}</h1>
      <p>{props.photo.explanation}</p>
      <img src={props.photo.hdurl} alt="" />
    </div>
  );
};

export default PhotoCard;
