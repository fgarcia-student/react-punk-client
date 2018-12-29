import React, { useEffect } from 'react';
import Header from '../components/Header';
import { getBeer } from '../state/entities/beer/selectors';
import { InitFetchBeer } from '../state/entities/beer/actions/InitFetchBeer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SelectedAttributeGraph from '../components/SelectedAttributeGraph';
import ContinueSearch from '../components/ContinueSearch';
import { Link } from "react-scroll";
import { getSelectedAttribute } from '../state/views/landing/selectors';
import { SetSelectedAttribute } from '../state/views/landing/actions';

const Menu = (props) => {
    const [toggle, setToggle] = React.useState("");
    const handleToggle = (e) => {
        if(!!toggle) {
            setToggle("")
        } else {
            setToggle("cancel");
        }
    }

    const handleSetAttribute = (e) => {
        setToggle("");
        props.setAttribute(e.currentTarget.value);
    }
    
    return(
        <div
            className={`menu ${toggle}`}
            onClick={handleToggle}
        >
            <div className="overlay" />
            <div className="bar_a" />
            <div className="bar_b" />
            <div className="bar_c" />
            <div className="content">
                <ul className="nav">
                    <li className="nav__item"><Link onClick={handleToggle} ignoreCancelEvents smooth to="header" href="#header">Header</Link></li>
                    <li className="nav__item"><Link onClick={handleToggle} ignoreCancelEvents smooth to="interactive" href="#interactive">Interactive Graph</Link></li>
                    <li className="nav__item"><Link onClick={handleToggle} ignoreCancelEvents smooth to="refine" href="#refine">Continue Search</Link></li>
                    <li className="nav__item">
                        <select onClick={(e) => e.stopPropagation()} className="select" value={props.selectedAttribute} onChange={handleSetAttribute}>
                            <option value="abv">ABV</option>
                            <option value="ibu">IBU</option>
                            <option value="ph">PH</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Landing = (props) => {
    // useEffect is the hook equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount
    useEffect(() => {
        props.fetchBeer();
        // return () => {...}
        // if we returned a function inside of this hook, the return function would run only on component unmount
        // this is useful for calling cleanup functions, etc.
    }, [])
    // empty array means hook doesnt depend on any values and will only run on mount
    // if we added a value here, the hook would run on mount, and if that value has changed afterwards

    return (
        <>
            <Menu
                setAttribute={props.setSelectedAttribute}
                selectedAttribute={props.selectedAttribute}
            />
            <Header attribute={props.selectedAttribute} />
            <SelectedAttributeGraph
                selectedAttribute={props.selectedAttribute}
                beer={props.beer}
            />
            <ContinueSearch
                selectedAttribute={props.selectedAttribute}
            />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        beer: getBeer(state),
        selectedAttribute: getSelectedAttribute(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchBeer: InitFetchBeer,
        setSelectedAttribute: SetSelectedAttribute,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);