import React, {useState} from 'react';
import CarForm from '../CarForm/CarForm';
import OutputControl from '../OutputControl/OutputControl';
import './CarContainer.scss';

function CarContainer() {
    const [currentSearch, setcurrentSearch] = useState('');


    const addCurrentSearch = newCar => {
        setcurrentSearch(newCar);
    }


    return (
        <div className="CarContainer">
            <CarForm addCurrentSearch={addCurrentSearch} />
            <OutputControl currentSearch={currentSearch} setcurrentSearch={setcurrentSearch} />
        </div>
    )
}


export default CarContainer;
