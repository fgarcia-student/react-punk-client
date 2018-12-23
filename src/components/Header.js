import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__landing">
                <span className="header__landing__attribute uppercase">{props.attribute}</span>
            </div>
        </div>
    );
}

export default Header;