import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

import EditBay from '../EditBay/EditBay';
import MyGarage from '../MyGarage/MyGarage';
import { GlobalProvider } from '../../context/CarsInGarage';
import './OutputControl.scss'


function OutputControl({currentSearch, setcurrentSearch}) {

    return (

        <div className="OutputControl">
               
            <div className="OutputControlSelector">
                <NavLink exact to="/" className="NavLink" activeClassName="ActiveNavLink">Search</NavLink>
                <NavLink to="/garage" className="NavLink" activeClassName="ActiveNavLink">My Garage</NavLink>
            </div>

            <div className="OutputControlView">
                <GlobalProvider>
                    <Switch>
                        <Route exact path='/' render={() => <EditBay currentSearch={currentSearch} setcurrentSearch={setcurrentSearch} />} />
                        <Route path='/garage' render={() => <MyGarage />} />
                    </Switch>

                </GlobalProvider>
            </div>
        </div>
    )
}

export default OutputControl;
