import BeerTypes from "../types";

export const SetBeer = (beers) => {
    return {
        beers,
        type: BeerTypes.SetBeer
    }
}