import { combineReducers } from "redux";
import BeerReducer from './entities/beer/reducers';
import LandingReducer from './views/landing/reducers';

function dummyReducer(state = {}, action) {
    return state;
}

export default combineReducers({
    entities: combineReducers({
        // Reducers handling responses from api calls
        beer: BeerReducer
    }),
    views: combineReducers({
        // Reducers handling view models used by the application
        landing: LandingReducer
    }),
    session: combineReducers({
        // Reducers handling session information
        // Can house theme, current user info, metadata
        dummyReducer
    })
})