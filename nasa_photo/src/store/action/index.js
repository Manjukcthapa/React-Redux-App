import axios from 'axios';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const getData = () => {
    return dispatch => {
      dispatch({ type: START_FETCHING });
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=CCXbV8XxG8yA3RamUcCcG6p7d1ZETE3FVa4y3mxf"
        )
        .then(res => {
          dispatch({ type: FETCH_SUCCESS, payload: res.data });
          console.log("NASA DATA:", res.data);
        })
        .catch(err => {
          dispatch({ type: FETCH_FAILURE, payload: err });
        });
    };
  };