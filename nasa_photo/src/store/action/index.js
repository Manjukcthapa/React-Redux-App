export const fetchPhotos = () => {
  dispatchEvent({ type: START_FETCHING });
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=CCXbV8XxG8yA3RamUcCcG6p7d1ZETE3FVa4y3mxf"
    )
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.all }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
