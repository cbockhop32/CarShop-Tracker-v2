import React, {useContext, useState} from 'react';
import { GlobalContext } from '../../context/CarsInGarage';
import { NavLink } from 'react-router-dom';
import './Car.scss';
import { numberWithCommas } from '../../styles/formatting'

function Car({ car, to }) {
    const { deleteCar } = useContext(GlobalContext);
    const [deletePrompt, setDeletePrompt] = useState(false);

    let imgView;

    if(car.imgUrl === undefined) {
        imgView = <i className="fas fa-car fa-6x" style={{color:"#86C232"}}></i>;
    } else {
        imgView = <img src={car.imgUrl} style={{height: '90%', borderRadius:"5px"}} alt={car.id} />
    }
    


    return (
        <NavLink className='Car' activeClassName="Car-Active" exact to={to}>
                <div className={`${deletePrompt ? "deleteModal show": "deleteModal" }`}>
                        <p className="deleteModal-Prompt">Delete this vehicle from My Garage?</p>
                        <div className="deleteModal-Btns">
                            <i className="fas fa-check-square fa-2x" onClick={() => deleteCar(car.id)} ></i>
                            <i className="fas fa-window-close fa-2x" onClick={() => setDeletePrompt(false)}></i>
                        </div>
                </div>



                <i className="fas fa-times-circle deleteCarBtn" id={car.id} onClick={() => setDeletePrompt(true)}></i>

                <div className="CarImgContainer">
                    {imgView}

                </div>


                <div className="CarLabel">
                    <h4>{car.year} {car.make} {car.model} {car.trim}</h4>
                    <p>Price: ${numberWithCommas(car.price)}</p>
                    <p className="CarMileage">Mileage: {numberWithCommas(car.mileage)} miles</p>
                
                </div>

          
        </NavLink>
         


     

        

      
            
       
    )
}

export default Car
