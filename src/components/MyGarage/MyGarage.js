import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalContext } from '../../context/CarsInGarage';
import Car from '../Car/Car';
import MyGarageBay from '../MyGarageBay/MyGarageBay';
import './MyGarage.scss';


// Component that renders all the Car components. Grabs list of Cars from the global context. Has a nested route that is used to generate MyGarageBay components when certain Car (NavLink) is selected

function MyGarage() {
    const {CarsInGarage} = useContext(GlobalContext);


    
    const carRoutes = CarsInGarage.map((car) => (
        <Route  exact path={`/garage/${car.id}`} key={car.id} render={() => <MyGarageBay car={car}   /> }  />
    ));

    const cars = CarsInGarage.map((car) => (<Car to={`/garage/${car.id}`} car={car} key={car.id}  />));

    let MyGarageHeaderOutput;
    let MyGarageOutput;

    if(CarsInGarage.length === 0) {
        MyGarageHeaderOutput = (
            <div className="MyGarage-Header-Empty">
                <i class="fas fa-warehouse fa-6x"></i>
                <p>Add cars to <strong>My Garage</strong> to view them here</p>
            </div>
        )


     
    } else {
        MyGarageHeaderOutput = (
            <div className="MyGarage-Header">
                {cars}
            </div>
        )


        MyGarageOutput = (
          
            <Switch>
                {carRoutes}
            </Switch>
            
        )
    }


    return (

        <div className='MyGarage'>
            {MyGarageHeaderOutput}
            {MyGarageOutput}

        </div>
     
        );
}


export default MyGarage;
