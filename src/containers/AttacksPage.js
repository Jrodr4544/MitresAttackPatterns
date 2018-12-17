import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import FilterContainer from './FilterContainer';

import AttacksShow from '../components/AttacksShow';

//import logo from '../mitre_attack.png'


class AttacksPage extends Component {
//const AttacksPage = ({match}) => {
  render() {
      debugger
    const { match } = this.props;

    return (
      <div>
{/* Attacks Page */}
      <FilterContainer />

        <Switch>  
         <Route path={`${match.url}/:attackId`} component={AttacksShow}/> 
         <Route path={match.url} render={() => ( 
          <h3>Select an Attack from the list.</h3>
         )}/> 
        </Switch> 
      </div>
    )
  }
};

export default connect(null)(AttacksPage);