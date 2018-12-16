import { ofType } from "redux-observable";
import BeerTypes from "../types";
import { mergeMap, withLatestFrom } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import PunkApiEndpoints from "../../../../utils/PunkApiEndpoints";
import { convertToImmutable } from "../utils";
import { ConcatBeer } from "../actions/ConcatBeer";

export const FetchBeerById = (action$, state$) => {
    return action$.pipe(
        ofType(BeerTypes.InitFetchBeerById),
        withLatestFrom(state$),
        mergeMap(([{ ids }, state]) => {
            return ajax.getJSON(PunkApiEndpoints.GetBeerByIds(ids)).pipe(
                mergeMap((beers) => {
                    const beerMap = convertToImmutable(beers);
                    return [ConcatBeer(beerMap)];
                })
            );
        })
    );
}