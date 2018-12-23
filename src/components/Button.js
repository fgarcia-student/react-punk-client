import React from 'react';

const Button = (props) => {
    return  (
        <i
            className="lba lba-basic-magnifier button"
            onClick={props.onClick}
        />
    );
}

export default Button;