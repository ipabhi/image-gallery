import React from "react";
import ImgItem from "./ImgItem";

const ImgList = function ({ imgData }) {
  const List = imgData.map(function (img, id) {
    // console.log(id);
    return <ImgItem key={id} image={img} />;
  });
  return <ul className='imgList'>{List}</ul>;
};

export default ImgList;
