import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './one.css';

export default class One extends Component {
    
    constructor(props) { // eslint-disable-line
        super(props);
        this.state = {
            timesRender: 0,
            stateOfOne: ''
        };
    }

    // static propTypes = {
    //     action: PropTypes.func.isRequired,
    // }


    componentWillMount() {
        console.log('component will mount'); 
    }

    componentDidMount() {
        console.log('component did mount');
        // this.setState(prevState => {timesRender: prevState.timesRender +1 })
    }

    componentWillReceiveProps(nextProps) {
        console.log('component will recieve props: ', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('component should update: ');
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        // const shouldUpdate = nextState !== this.state;
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

    changeState = () => {
        this.setState({stateOfOne: 'changed'})
    }

    render() {
        
        // this.setState(prevState, () => {timesRender: prevState.timesRender + 1}) //causes infinite loop
        return (
            <div className={'one-box'} onClick={this.props.action}>
                 {this.state.stateOfOne}
            </div>
        )
    }
}
