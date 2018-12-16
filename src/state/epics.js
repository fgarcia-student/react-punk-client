import { combineEpics } from 'redux-observable';
import { FetchBeer } from './entities/beer/operations/FetchBeer';
import { FetchNextPage } from './entities/beer/operations/FetchNextPage';
import { FetchBeerById } from './entities/beer/operations/FetchBeerById';


export default combineEpics(
    // place epics in here
    FetchBeer,
    FetchNextPage,
    FetchBeerById
);