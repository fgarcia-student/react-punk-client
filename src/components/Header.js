import React from 'react';

const Header = (props) => {
    return (
        <section className="header">
            <div className="header__landing">
                <span className="header__landing__attribute uppercase">{props.attribute}</span>
            </div>
        </section>
    );
}

export default Header;