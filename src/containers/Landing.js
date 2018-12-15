import React from 'react';
import Header from '../components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Landing = (props) => {
    const fakeProps = "ABV";
    return (
        <>
            <Header attribute={fakeProps} />
        </>
    );
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);