import React, { useEffect } from 'react';
import Header from '../components/Header';
import { getBeer } from '../state/entities/beer/selectors';
import { InitFetchBeer } from '../state/entities/beer/actions/InitFetchBeer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BeerCard from '../components/BeerCard';

const Landing = (props) => {
    console.log(props.beer);

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
            <Header attribute={props.selectedAttribute} />
            {props.beer.toList().map((beer) => {
                return (
                    <BeerCard
                        name={beer.name}
                        tagline={beer.tagline}
                        attribute={props.selectedAttribute}
                        beer={beer}
                    />
                );
            })}
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