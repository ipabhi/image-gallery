import React from "react";

const ImgItem = function ({ image: { download_url, author, id } }) {
  // btn function
  const downloadImage = function () {
    window.open(download_url);
  };

  // helper function to add 200px width on every image
  const newWidthUrl = function (url, id) {
    const getArray = url.split(`id/${id}`);
    const replaceWidth = getArray[1].replace(getArray[1], `id/${id}/200`);
    const newString = getArray[0].toString();
    const newUrlString = `${newString}${replaceWidth}`;
    return newUrlString;
  };

  return (
    <li>
      <img src={newWidthUrl(download_url, id)} alt={author} title={author} />
      <p>Image by: {author}</p>
      <button onClick={downloadImage}>Download</button>
    </li>
  );
};
export default ImgItem;
