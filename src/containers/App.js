import React from 'react';
import { connect } from 'react-redux';
import AppComponent from '../components/App';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.1/node_modules/redux';

const AppContainer = (props) => {
    // example of React hook useState as per v16.7.0-alpha
    const [msg, setMsg] = React.useState("");

    return (
        <AppComponent msg={msg} setMsg={setMsg} />
    );
}

const mapStateToProps = (state) => {
    // maps redux state to props
    return {
        // list relevant state properties here
    }
}

const mapDispatchToProps = (dispatch) => {
    // exposes dispatch to action creators
    // use with bindActionCreators to automagically bind
    // dispatch to action creators
    return bindActionCreators({
        // list relevant action creators here
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);