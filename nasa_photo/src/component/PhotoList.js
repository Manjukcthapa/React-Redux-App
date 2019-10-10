import React from "react";
import PhotoCard from "./PhotoCard";
import { connect } from "react-redux";
import { getData } from "../store/action";

const PhotoList = props => {
  return(
  <div>
    
    <button onClick={() => props.getData()}>Click Me</button>
    <PhotoCard photo={props.photo} /> 
  </div>
  
  )}

const mapStateToProps = state => {
  return {
    photo: state.photo
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(PhotoList);
