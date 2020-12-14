import React from "react";
import ImgList from "./ImgList";


const ImageContainer = function ({appData}) {
  return (
    <section>
      <ImgList imgData={appData} />
    </section>
  );
};

export default ImageContainer;
