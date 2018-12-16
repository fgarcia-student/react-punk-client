export default class PunkApiEndpoints {
    static GetBeer = "https://api.punkapi.com/v2/beers?per_page=80";
    
    static GetBeerOnPageX(page) {
        if (Number.isNaN(parseInt(page, 10))) {
            return null;
        }
        return `${PunkApiEndpoints.GetBeer}&page=${page}`;
    }

    static GetBeerByIds(ids) {
        if (!Array.isArray(ids)) {
            return null;
        }
        return `${PunkApiEndpoints.GetBeer}&ids=${ids.join("|")}`;
    }
}