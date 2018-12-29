import React, { useEffect } from 'react';
import Header from '../components/Header';
import { getBeer } from '../state/entities/beer/selectors';
import { InitFetchBeer } from '../state/entities/beer/actions/InitFetchBeer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SelectedAttributeGraph from '../components/SelectedAttributeGraph';
import ContinueSearch from '../components/ContinueSearch';
import { Link } from "react-scroll";

const Menu = (props) => {
    const [toggle, setToggle] = React.useState("");
    const handleToggle = (e) => {
        if(!!toggle) {
            setToggle("")
        } else {
            setToggle("cancel");
        }
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
            <Menu />
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
        selectedAttribute: "abv"
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchBeer: InitFetchBeer,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);