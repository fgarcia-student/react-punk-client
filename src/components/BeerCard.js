import React from 'react';

const BeerCard = (props) => {
    return (
        <div className="card">
            <div className="card__main">{props.name}</div>
            <div className="card__sub">{props.tagline}</div>
            <div className="card__attribute">
                <span className="card__attribute__name">{props.attribute}</span>
                <span className="card__attribute__value">{props.beer[props.attribute]}</span>
            </div>
        </div>
    );
}

export default BeerCard;