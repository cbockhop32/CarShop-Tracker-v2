import React from 'react';
import './ImageView.scss';

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
