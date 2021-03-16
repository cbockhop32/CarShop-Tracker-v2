import React from 'react';
import './ImageView.scss';

// Displays image once upload is complete. ImageForm takes in the input/upload from user, once the Progress Bar (child of ImageForm) is complete, it uses GetImgUrl prop (passed down from ImageForm passed down from EditBay) to set the Url in the parent of the parent (EditBay). Once that happeens, EditBay passes down ImageUrl as a prop to ImageView to be displayed

function ImageView({ imgUrl, currentSearch} ) {
    let ImageViewOutput;
    
    if(imgUrl) {
        ImageViewOutput = <div  className='ImgPlaceholder' ><img src={imgUrl} style={{width: '100%'}} alt="imgUrl"/>{currentSearch.year} {currentSearch.make} {currentSearch.model} {currentSearch.trim} </div>;
    } else {
        ImageViewOutput = <div  className='ImgPlaceholder' ><i className="fas fa-car fa-8x" style={{color:"#86C232"}}></i>Upload Image</div>
    };

    return ImageViewOutput;



  
}

export default ImageView
