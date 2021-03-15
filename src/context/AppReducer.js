export default (state, action) => {
    switch(action.type) {
        case "DELETE_CAR":
            return {
                ...state,
                CarsInGarage: state.CarsInGarage.filter(car => car.id !== action.payload)
            }


        case "ADD_CAR":
            return {
                ...state,
                CarsInGarage: [action.payload, ...state.CarsInGarage]
            }

        default:
            return state;
    }
} 