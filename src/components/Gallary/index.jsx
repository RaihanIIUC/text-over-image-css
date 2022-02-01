import React from 'react';

const PhotoGallary = () => {

     fetch("http://localhost:8000/gallery", {
        method: "GET",
     })
        .then((result) => {
            alert(result,'======');
        })
        .catch(() => {
            alert('Error in the Code');
        });


  return <div>
      <h1>hello</h1>
  </div>;
};

export default PhotoGallary;
