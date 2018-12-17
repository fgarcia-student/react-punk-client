import React from 'react';

const BeerCard = (props) => {
    if (props.beer === null) { return "Loading..."; }
    return (
        <div className="card">
            <div className="card__main">{props.beer[props.main]}</div>
            <div className="card__sub">{props.beer[props.sub]}</div>
            <div className="card__attribute">
                <span className="card__attribute__name">{props.attribute}</span>
                <span className="card__attribute__value">{props.beer[props.attribute]}</span>
            </div>
        </div>
    );
}

export default BeerCard;