import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import './ImageForm.scss';

// Holds the input field that allows user to upload file


const ImageForm = ({getImgUrl}) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        const types = ['image/png', 'image/jpeg'];
        
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return(
        <form className="UploadImgForm">
            <label htmlFor="imageUpload" className="imageLabel"><i className="fas fa-plus-circle fa-2x"></i></label>
            <input id="imageUpload" type="file" onChange={changeHandler} style={{display: 'none'}}/>
            <div className="output">
                {error && <div className="error">{error}</div> }
                {file && <div>{file.name}</div> }
                {file && <ProgressBar file={file} setFile={setFile} getImgUrl={getImgUrl}/>}
            </div>
        </form>
    )
}

export default ImageForm;