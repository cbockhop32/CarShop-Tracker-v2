import React, {useState} from 'react';
import CarForm from '../CarForm/CarForm';
import OutputControl from '../OutputControl/OutputControl';
import './CarContainer.scss';


// Main parent container that is rendered in App.js. Renders two components CarForm (top of the page) and OutputControl (houses the router and all the other components)

function CarContainer() {
    const [currentSearch, setcurrentSearch] = useState('');

    // Saves the current search from the CarForm (passed up from CarForm so CarContainer can pass it down to OutputControl to be used)
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
