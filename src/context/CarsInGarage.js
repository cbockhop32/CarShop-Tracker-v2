import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    CarsInGarage: []
}


// Creates context
export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('CarsInGarage');
        return localData ? JSON.parse(localData) : initialState;
    }) ;

    useEffect(() => {
        localStorage.setItem('CarsInGarage', JSON.stringify(state))
    }, [state])
        

    // Delete Car Action
    function deleteCar(id) {
        dispatch({
            type:'DELETE_CAR',
            payload: id
        })
    }


    // Add Car Action
    function addCar(car) {
    dispatch({
        type:'ADD_CAR',
        payload: car
    })
    }

    return (
        <GlobalContext.Provider value={{
            CarsInGarage: state.CarsInGarage,
            deleteCar,
            addCar
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


