import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as demoActions from '../redux/actions/demoActions';

class ReduxView extends Component {
    constructor(props){
        super(props);
    }

    toBack(){
        this.props.history.goBack();
    }

    render(){
        console.log("reduxView====>>",this.props);
        return(
            <div onClick={()=>{this.toBack()}}>
                <h1>我的啊{this.props.count}</h1>
            </div>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(ReduxView);