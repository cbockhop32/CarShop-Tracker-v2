import React from 'react';
import useInputState from '../hooks/useInputState';
import uuid from "uuid/dist/v4";
import './OptionsForm.scss';

function OptionsForm({getOptionsData, optionsList, deleteOption}) {
    const [options, setOptions, reset] = useInputState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        const newOption = {
            name: options,
            id: uuid()
        }

        getOptionsData('options', newOption);

        reset();

      
    }

    const handleDelete = (e) => {
        deleteOption(e.target.id);

    }


    return (
        <div className="OptionsForm">
                 <h4>Add Options</h4>


                <form className="FormCont-OptionsForm" onSubmit={handleSubmit} >
                   
                    <label>Options</label>
                    <input className='Input-OptionsForm' type="text" onChange={setOptions} value={options}></input>
                    <button className="Btn-OptionsForm">Add Option</button>
                </form>

                <ul className="OptionsList">
                    {optionsList ? optionsList.map((option, index) => (
                        <li className="ListItem" key={index}>{option.name}<i className="fas fa-minus-circle" id={option.id} onClick={handleDelete}></i></li>
                    )) : <li>No Options Added</li>}

                </ul>
            


            </div>
    )
}

export default OptionsForm
