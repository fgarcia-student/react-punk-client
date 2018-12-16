import Beer from "../../../models/Beer";
import { OrderedMap } from "immutable";

export const convertToImmutable = (beerArray) => {
    const beerMap = {};
    beerArray.forEach((beer) => beerMap[beer.id] = new Beer(beer));
    return OrderedMap(beerMap);
}