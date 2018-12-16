import { Record, OrderedMap } from "immutable";
import BeerTypes from "./types";

class BeerState extends Record({
    beer: OrderedMap(),
    page: 0
}) {

}

const BeerReducer = (state = new BeerState(), action) => {
    switch(action.type) {
        case BeerTypes.SetBeer:
            return state.set("beer", action.beers);
        case BeerTypes.SetPage:
            return state.set("page", action.page);
        case BeerTypes.ConcatBeer:
            return state.set("beer", state.beer.concat(action.beers));
        default:
            return state;
    }
}

export default BeerReducer;