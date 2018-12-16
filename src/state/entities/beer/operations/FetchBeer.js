import { ofType } from 'redux-observable';
import { mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import BeerTypes from '../types';
import PunkApiEndpoints from '../../../../utils/PunkApiEndpoints';
import { SetBeer } from '../actions/SetBeer';
import { SetPage } from '../actions/SetPage';
import { convertToImmutable } from '../utils';

export const FetchBeer = (action$, state$) => {
    return action$.pipe(
        ofType(BeerTypes.InitFetchBeer),
        mergeMap(() => {
            return ajax.getJSON(PunkApiEndpoints.GetBeer).pipe(
                mergeMap((beers) => {
                    const beerMap = convertToImmutable(beers);
                    return [
                        SetBeer(beerMap),
                        SetPage(1)
                    ];
                }),
                catchError((error) => console.log)
            );
        })
    );
}