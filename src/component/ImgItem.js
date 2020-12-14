import React from "react";

const ImgItem = function ({ image: { download_url, author, id } }) {
  // helper function to add 200px width on every image
  const newWidthUrl = function (url, id) {
    const getArray = url.split(`id/${id}`);
    const replaceWidth = getArray[1].replace(getArray[1], `id/${id}/200`);
    const newString = getArray[0].toString();
    const newUrlString = `${newString}${replaceWidth}`;
    return newUrlString;
  };

  return (
    <div>
      <img src={newWidthUrl(download_url, id)} alt={author} />
      <button>find more</button>
    </div>
  );
};
export default ImgItem;
