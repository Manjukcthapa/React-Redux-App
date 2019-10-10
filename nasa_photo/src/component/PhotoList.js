import React from "react";
import PhotoCard from "./PhotoCard";

const PhotoList = () => {
<div>
{props.photo.map(item => <PhotoCard key={item.name} photo={item} />)}
</div>
}

export default PhotoList;