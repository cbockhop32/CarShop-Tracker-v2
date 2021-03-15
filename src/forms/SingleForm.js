import React, {useState} from 'react'
import useInputState from '../hooks/useInputState';
import './SingleForm.scss';
import {numberWithCommas} from '../styles/formatting';

function SingleForm({valName, getFormData}) {
    const [formVal, setFormVal] = useInputState('');
    const [isEditing, setIsEditing] = useState(true);

    let result;
    let savedValue;




    const handleSubmit = (e) => {
        e.preventDefault();

        if(formVal === '') {
            alert('Please enter values into all required fields')
        } else {
            getFormData(valName, formVal);
            setIsEditing(false);
        }

     


    }

    if(valName === 'listing') {
        savedValue =  (<a className="LockedVal-SingleForm Link" href={formVal} target="_blank" rel="noreferrer" >Link to Listing</a>);
    } else if(valName === 'price') {
        savedValue = <div className="LockedVal-SingleForm">${numberWithCommas(formVal)}</div>
    } else if(valName === 'mileage') {
        savedValue = <div className="LockedVal-SingleForm">{numberWithCommas(formVal)} miles</div>
    } else {
        savedValue = <div className="LockedVal-SingleForm">{formVal}</div>
    }

    


    if(isEditing) {

        result = (
            <form className="SingleForm" onSubmit={handleSubmit} >
                <label>{valName}</label>
                <input className="Input-SingleForm" onChange={setFormVal} value={formVal}></input>
               
                <button className="Btn-SingleForm">Save</button>
            </form>
        )
     
    } else {
        result = (
            <form className="SingleForm" onSubmit={() => setIsEditing(true)} >
                <label>{valName}</label>


                {savedValue}


                <button className="Btn-SingleForm" >Edit</button>
            </form>
        )
    }

    return result;
}


export default SingleForm;
