import React from 'react';
import { Element } from 'react-scroll';

const Header = (props) => {
    return (
        <section className="header">
            <Element name="header" />
            <div className="header__landing">
                <span className="header__landing__attribute uppercase">{props.attribute}</span>
            </div>
        </section>
    );
}

export default Header;