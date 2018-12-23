import React from 'react';

const Button = (props) => {
    return  (
        <div className="button">
            <i
                className="lba lba-basic-magnifier"
                onClick={props.onClick}
            />
            {!!props.text &&
                <span className="button__text">{props.text}</span>
            }
        </div>
    );
}

export default Button;