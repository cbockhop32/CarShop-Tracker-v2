import React from 'react';
import useInputState from '../../hooks/useInputState';
import './CarForm.scss';

function CarForm({ addCurrentSearch }) {
    const [year, updateYear, resetYear] = useInputState('');
    const [make, updateMake, resetMake] = useInputState('');
    const [model, updateModel, resetModel] = useInputState('');
    const [trim, updateTrim, resetTrim] = useInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentCar = {
            year: year,
            make: make,
            model: model,
            trim: trim
        }

        if(year === '' || make === '' || model === '') {
            alert('Please enter required fields')
        } else {
            addCurrentSearch(currentCar);
            resetFormState();
        }

    
    }

    const resetFormState = () => {
        resetYear();
        resetMake();
        resetModel();
        resetTrim();
    }


    return (
        <div className="CarForm"  > 
            <form className="CarForm-Container" onSubmit={handleSubmit} >
                <div className="Inner-Container">
                    <div className="Input-Container">
                        <label htmlFor="year">Year<span>*</span></label>
                        <input className='formInput' id="year"  name="year" value={year} onChange={updateYear} autoFocus></input>
                    </div>

                    <div className="Input-Container" >
                        <label htmlFor="make">Make<span>*</span></label>
                        <input className='formInput' id="make" name ="make" value={make} onChange={updateMake} ></input>
                    </div>

                    <div className="Input-Container" >
                        <label htmlFor="model">Model <span>*</span></label>
                        <input className='formInput' id="model" name ="model" value={model} onChange={updateModel}></input>
                    </div>

                    <div className="Input-Container" >
                        <label htmlFor="trim">Trim</label>
                        <input className='formInput' id="trim"  name ="trim" value={trim} onChange={updateTrim} ></input>
                    </div>

                </div>
            

            
                <button className="Btn-LoadCar">Add Car</button>
                <p className="RequiredNote">* Required</p>
            </form>
            
        
    </div>
    )
}


export default CarForm;
