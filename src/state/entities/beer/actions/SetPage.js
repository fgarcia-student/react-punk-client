import BeerTypes from "../types";

export const SetPage = (page) => {
    return {
        page,
        type: BeerTypes.SetPage
    }
}