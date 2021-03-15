import React, {useState, useContext, useEffect} from 'react';
import SingleForm from '../../forms/SingleForm';
import OptionsForm from '../../forms/OptionsForm';
import CommentsForm from '../../forms/CommentsForm';
import ImageForm from '../../forms/ImageForm';
import ImageView from '../../forms/ImageView';
import { GlobalContext } from '../../context/CarsInGarage';
import uuid from "uuid/dist/v4";
import './EditBay.scss';

function EditBay({currentSearch, setcurrentSearch}) {
    const { addCar } = useContext(GlobalContext);
    const [newCar, setNewCar] = useState({options: []});
    const [validCar, setValidCar] = useState(false);


    useEffect(() => {
        const validPrice = newCar.price && newCar.price !== '';
        const validMileage = newCar.mileage && newCar.mileage !== '';


        if(validPrice && validMileage) {
            setValidCar(true)
        } 



    }, [newCar])


    const getFormData = (formName, formValue) => {
        setNewCar({
            ...newCar,
            [formName]: formValue
        })
    }

    const getOptionsData = (name, option) => {
        setNewCar({
            ...newCar,
            [name]: [...newCar[name], option ]
        })

        


    }

    const deleteOption = (id) => {
       const filteredOptions = newCar.options.filter(option => {
           if(option.id !== id) return option;
       })

       setNewCar({
           ...newCar,
           options: filteredOptions
       })


       
    }

    const getImgUrl = (url) => {
        setNewCar({
            ...newCar,
            imgUrl: url
        })
    }


  

    const CarForGarage = {
        ...currentSearch,
        ...newCar,
        id: uuid()
    }


   
   
    

    let EditBayHeaderOutput;
    let EditBayOutput;

    if(currentSearch === '') {
        EditBayHeaderOutput = (
            <div className='EditBay-Header'>
                <i className="fas fa-truck-pickup fa-10x"></i>
                <p>Welcome to Car Tracker. Enter in the car details above to begin adding cars to My Garage.</p>
            </div>
        )


        
    } else {
        EditBayHeaderOutput = (
            <div className='EditBay-Header'>
                <i className="fas fa-truck-pickup fa-10x"></i>
                <p>You added a <strong>{currentSearch.year} {currentSearch.make} {currentSearch.model}</strong></p>
            </div>


        )




        EditBayOutput = ( 
        
             <div className="EditBayOutput">

                <div className="EditBay-Forms">
                    <div className="EditBay-Image">
                        <ImageView imgUrl={newCar.imgUrl} currentSearch={currentSearch} />
                        <ImageForm getImgUrl={getImgUrl}/>
                    </div>
                    <div className="EditBay-SingleForms">
                        <SingleForm valName='price' getFormData={getFormData}/>
                        <SingleForm valName='mileage' getFormData={getFormData} />
                        <SingleForm valName='location' getFormData={getFormData} />
                        <SingleForm valName='listing' getFormData={getFormData} />
                       
                    </div>

                    <div className="EditBay-MultipleForms">
                        <OptionsForm getOptionsData={getOptionsData} optionsList={newCar.options} deleteOption={deleteOption}/>
                        <CommentsForm valName='comments' getFormData={getFormData}  />
                    </div>

                </div>
                  

                   
                <button className="Btn-AddCar" disabled={!validCar} onClick={() => {addCar(CarForGarage); setcurrentSearch(''); setNewCar({})}}>Add Car To Garage</button>
                <p className={validCar ? "AddCar-RequiredNote Hide" : "AddCar-RequiredNote"}>Price and Mileage required to add car to My Garage</p>

            </div>
        )
         
    }

    return (
        <div >
            {EditBayHeaderOutput}

            {EditBayOutput}
        </div>
    )
}


export default EditBay;
