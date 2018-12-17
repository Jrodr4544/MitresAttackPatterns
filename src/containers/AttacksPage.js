import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchAttackPatterns } from '../actions/index';

import AttacksShow from '../components/AttacksShow';
import AttacksList from '../components/AttacksList';

import AttacksFilter from './AttacksFilter';

//import logo from '../mitre_attack.png'

class AttacksPage extends Component {

  //componentDidMount() {
  //    debugger
  //  this.props.fetchAttackPatterns()
  //}

  render() {
      debugger
    const { match } = this.props;//, attackPatterns } = this.props;

    return (
     <div>
      {/* Attacks Page */}
      <AttacksFilter/>{/* attackPatterns={attackPatterns}/> */}

        <Switch>  {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
         <Route exact path={match.url} render={() => ( 
           <h3>Select an Attack from the list.</h3> 
         )}/> 
        </Switch> 
     </div>
    )
  }
};

const mapStateToProps = state => {
    debugger
  return {
    attackPatterns: state.attackPatterns
  };
}

export default connect(null)(AttacksPage);
//export default connect(mapStateToProps)(AttacksPage);//, { fetchAttackPatterns })(AttacksPage);