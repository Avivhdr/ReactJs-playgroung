import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as performanceActions from './performance.actions';
// import performanceReducer from './performance.Reducer';

import One from './views/One';

class Performance extends Component {

  static PropTypes = {
    storeObject: PropTypes.object,
    actions: PropTypes.isAny
  }

  constructor(props) { // eslint-disable-line
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

  componentDidCatch(error, info) {
    console.log('component Did Catch');
    console.log(error, info);
  }

  render() {
    return (
      <div>
        <One props={this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeObject: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(performanceActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Performance);
