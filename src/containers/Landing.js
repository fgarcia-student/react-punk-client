import React from 'react';
import Header from '../components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Landing = (props) => {
    return (
        <>
            <Header attribute={props.selectedAttribute} />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedAttribute: "ABV",
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);