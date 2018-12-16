import { ofType } from "redux-observable";
import BeerTypes from "../types";
import { mergeMap, withLatestFrom, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import PunkApiEndpoints from "../../../../utils/PunkApiEndpoints";
import { empty } from "rxjs";
import { convertToImmutable } from "../utils";
import { ConcatBeer } from "../actions/ConcatBeer";
import { SetPage } from "../actions/SetPage";

export const FetchNextPage = (action$, state$) => {
    return action$.pipe(
        ofType(BeerTypes.InitFetchNextPage),
        withLatestFrom(state$),
        mergeMap(([, state]) => {
            const { page } = state.entities.beer;
            if (page < 1) { return empty(); }
            return ajax.getJSON(PunkApiEndpoints.GetBeerOnPageX(page + 1)).pipe(
                mergeMap((beers) => {
                    const beerMap = convertToImmutable(beers);
                    return [
                        ConcatBeer(beerMap),
                        SetPage(page + 1)
                    ];
                }),
                catchError((error) => console.log)
            );
        })
    );
}