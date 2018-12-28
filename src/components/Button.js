import React from 'react';
import { useSpring, animated } from 'react-spring/hooks'

const Button = (props) => {
    const { transform, opacity, position } = useSpring({
        position: "absolute",
        opacity: props.showB ? 1 : 0,
        transform: `perspective(600px) rotateX(${props.showB ? 180 : 0}deg)`,
        config: { tension: 180, friction: 20 }
    })

    let width;
    if (props.b) {
        width = "15rem";
        if (props.showB) {
            width = "22rem";
        }
    }
    return  (
        <div
            className="button"
            onClick={props.onClick}
            style={{ width, verticalAlign: "bottom" }}
        >
            <animated.div
                style={{ opacity: opacity.interpolate(o => 1 - o), transform, position }}
            >
                {!!props.icon && 
                    <i className={`${props.icon} button__icon`} />
                }
                {!!props.text && !props.showB &&
                    <span className="button__text">{props.text}</span>
                }
            </animated.div> 
            {!!props.b && 
                <>
                    <animated.div
                        style={{ position, opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
                    >
                        
                        {!!props.icon && 
                            <i className={`${props.icon} button__icon`} style={{ paddingRight: "8px" }} />
                        }
                        {props.b}
                    </animated.div>
                </>
            }
        </div>
    );
}

export default Button;