import React from 'react';
import { Element } from 'react-scroll';
import { Transition } from 'react-spring';

const fromStyle= {
    transform: "translateY(50px)",
    position: "absolute",
    right: 0,
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

const Header = (props) => {
    return (
        <section className="header">
            <div className="header__love">Made with <span role="img" aria-label="heart">❤️</span> by <a className="header__love--link" href="https://github.com/fgarcia-student">Francisco</a></div>
            <Element name="header" />
            <Transition
                config={{ tension: 180, friction: 20 }}
                keys={props.attribute}
                items={props.attribute}
                from={fromStyle}
                enter={enterStyle}
                leave={leaveStyle}
            >
            {item => style => 
                <div style={style} className="header__landing">
                    <span className="header__landing__attribute uppercase">{item}</span>
                </div>
            }
            </Transition>
        </section>
            
    );
}

export default Header;