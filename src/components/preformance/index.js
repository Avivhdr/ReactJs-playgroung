import React, {Component} from 'react';
import PropTypes from 'prop-types';// eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as preformanceActions from './preformance.actions';
// import preformanceReducer from './preformance.Reducer';

import One from './views/One';

class Preformance extends Component {

    constructor(props) {// eslint-disable-line
        super(props);
    }

    componentWillMount() {
        console.log('component will mount');
    }
    
    componentDidMount() {
        console.log('component did mount');
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('component will recieve props: ', nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('component should update: ');
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('component will update: ');
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update: ');
        console.log('prevProps: ', prevProps);
        console.log('prevProps: ', prevState);
    }
    
    componentWillUnmount() {
        console.log('component will unmount');
    }

    
    
    render() {
        return (
            <div>
                <One props={this.props}/>
            </div>
        );
    }
}

// Preformance.propTypes = {
//     storeObject: PropTypes.object,
//     actions: PropTypes.isAny
// }

function mapStateToProps(state) {
    return {
        storeObject: state
    };    
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(preformanceActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Preformance);
