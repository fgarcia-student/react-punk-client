
export const getBeer = (state) => {
    if (state.entities) {
        return state.entities.beer.beer;
    }
    return null;
}