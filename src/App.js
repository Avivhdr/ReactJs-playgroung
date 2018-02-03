/* eslint-disable */

import React, {Component} from 'react';
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom';
import _ from 'lodash';
import Map from './components/map';
import Searchbox from './components/SearchBox' 
import StandAloneSearchbox from './components/StandAloneSearchBox' 
import Show from './components/Show';
import Home from './components/Home';
import MyForm from './redux/MyForm';
import store from './redux/store';

class ContactPage extends React.Component {
  submit = (values) => {
    console.log(values)
  }
  render() {
    return (
      <MyForm onSubmit={this.submit} />
    ) 
  }
}

const ShowLocations = () => {
  return (
    <Show 
    containerElement={ <div style={{ height: `600px` }} /> } 
    mapElement={ <div style={{ height: `100%` }} /> }
    />
  )
}

const ShowFeatures = () => {
  return (
      <Map 
      containerElement={ <div style={{ height: `600px` }} /> } 
      mapElement={ <div style={{ height: `100%` }} /> }
      // onToggleOpen={this.onToggleOpen.bind(this)}
      // isOpen={this.state.isOpen}
      /> 
  )
}

class App extends Component {
  constructor(props){
    super()
    this.state={
      isOpen: false
    }
  }

  onToggleOpen () {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <Router>
        <div>
          <ul style={styles.ul}>
            <li style={styles.li}><Link to="/">Home</Link></li>
            <li style={styles.li}><Link to="/search">Search</Link></li>
            <li style={styles.li}><Link to="/show">Show</Link></li> 
            <li style={styles.li}><Link to="/features">Features</Link></li> 
            <li style={styles.li}><Link to="/form">form</Link></li> 
            <li style={styles.li}><Link to="/preformance">preformance</Link></li> 
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/search" component={StandAloneSearchbox}/>
          <Route path="/show" component={ShowLocations}/>
          <Route path="/features" component={ShowFeatures}/>
          <Route path="/form" component={ContactPage}/>
          <Route path="/preformance" component={Preformance}/>

        </div>
      </Router>

    );
  }
}

export default App;

const styles = {
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  li: {
    float: 'left',
    padding: '8px'
  }
}




        /* <StandAloneSearchbox /> */

        /* <Searchbox 
          containerElement={ <div style={{ height: `550px` }}  /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        /> */

        /* <Map 
          containerElement={ <div style={{ height: `600px` }} /> } 
          mapElement={ <div style={{ height: `100%` }} /> }
          onToggleOpen={this.onToggleOpen.bind(this)}
          isOpen={this.state.isOpen}
          /> */
        
