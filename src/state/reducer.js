import { combineReducers } from "redux";

function dummyReducer(state = {}, action) {
    return state;
}

export default combineReducers({
    entities: combineReducers({
        // Reducers handling responses from api calls
        dummyReducer
    }),
    views: combineReducers({
        // Reducers handling view models used by the application
        dummyReducer
    }),
    session: combineReducers({
        // Reducers handling session information
        // Can house theme, current user info, metadata
        dummyReducer
    })
})