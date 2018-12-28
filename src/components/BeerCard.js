import React from 'react';
import { Transition } from 'react-spring';

const fromStyle= {
    transform: "translateY(50px)",
    position: "absolute",
    opacity: 0,
};

const enterStyle= {
    transform: "translateY(0)",
    opacity: 1,
};

const leaveStyle= {
    transform: "translateY(-50px)",
    opacity: 0,
};

const BeerCard = (props) => {

    if (props.beer === null) { return "Loading..."; }
    return (
        <Transition
            config={{ tension: 180, friction: 20 }}
            keys={props.beer.id}
            items={props.beer}
            from={fromStyle}
            enter={enterStyle}
            leave={leaveStyle}
        >
            {item => style => (
                <div style={{ ...style, transform: "translateY(0)" }} className={"card"}>
                    <div style={{ ...style, position: "relative" }} className="card__main">{item[props.main]}</div>
                    <div style={{ ...style, position: "relative" }} className="card__sub">{item[props.sub]}</div>
                    <div style={{ ...style, position: "relative" }} className="card__attribute">
                        <span style={{ ...style, position: "relative" }} className="card__attribute__name uppercase">{props.attribute}</span>
                        <span style={{ ...style, position: "relative" }} className="card__attribute__value">{item[props.attribute]}</span>
                    </div>
                </div>
            )}
        </Transition>
    );
}

export default BeerCard;