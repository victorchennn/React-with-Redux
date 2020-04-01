import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  // map create a new array
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;

// img.alt is description of the images
// for list, better to have 'key' property
