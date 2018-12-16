import BeerTypes from "../types";

export const ConcatBeer = (beers) => {
    return {
        beers,
        type: BeerTypes.ConcatBeer
    }
}