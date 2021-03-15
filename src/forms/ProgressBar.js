import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import './ProgressBar.scss';


function ProgressBar({ file, setFile, getImgUrl }) {
    const {url, progress} = useStorage(file);

    useEffect(() => {
        if(url) {
            // Set Imgurl in EditBay to saved into the global context
            getImgUrl(url)
            // Reset File
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div className="ProgressBar" style={{width: progress + '%'}}></div>
    )
}

export default ProgressBar
