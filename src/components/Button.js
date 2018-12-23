import React from 'react';

const Button = (props) => {
    return  (
        <div className="button" onClick={props.onClick}>
            {!!props.icon && 
                <i className={`${props.icon} button__icon`} />
            }
            {!!props.text &&
                <span className="button__text">{props.text}</span>
            }
            {!!props.children &&
                props.children
            }
        </div>
    );
}

export default Button;