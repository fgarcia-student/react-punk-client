import { Record } from "immutable";


export default class Beer extends Record({
    id: null,
    name: null,
    tagline: null,
    first_brewed: null,
    description: null,
    image_url: null,
    abv: null,
    ibu: null,
    ph: null,
    food_pairing: null,
    brewers_tips: null,
    contributed_by: null
}) {
    get firstBrewed() {
        return this.get("first_brewed", null);
    }

    get imageUrl() {
        return this.get("image_url", null);
    }

    get foodPairing() {
        return this.get("food_pairing", null);
    }

    get brewersTips() {
        return this.get("brewers_tips", null);
    }

    get contributedBy() {
        return this.get("contributed_by", null);
    }
}