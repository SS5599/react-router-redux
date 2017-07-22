import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import reduxView from './views/reduxView';
import {  
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as demoActions from './redux/actions/demoActions';

class App extends Component {

  constructor(props){
    super(props);
  }

  toPage(){
    this.props.history.push("/reduxView");
  }

  render() {
    console.log("====>>",this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.count}</h2>
        </div>
        <div className="App-intro" onClick={()=>{this.props.actions.getCount()}}>
           点我
        </div>
        <Link to="/reduxView">
          <div>跳转</div>
        </Link>
        <div onClick={()=>{this.toPage()}}>push</div>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		count: state.default.count,
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(demoActions,dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
