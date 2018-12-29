import LandingTypes from './types';

const LandingReducer = (state = { selectedAttribute: "abv" }, action) => {
    switch(action.type) {
        case LandingTypes.SetSelectedAttribute:
            return { selectedAttribute: action.attribute };
        default:
            return state;
    }
}

export default LandingReducer;