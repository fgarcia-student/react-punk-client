import BeerTypes from "../types";

export const InitFetchBeerById = (ids) => {
    return {
        ids,
        type: BeerTypes.InitFetchBeerById
    }
}