import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Route, Switch } from 'react-router-dom';
//import { fetchPets } from '../actions';
//import PetsNew from './PetsNew';
//import PetsShow from './PetsShow';
//import PetsList from '../components/PetsList';


class AttacksPage extends Component {

  componentDidMount() {
    this.props.fetchAttackPatterns()
  }

  render() {
    const { match, attacks } = this.props;

    return (
     <div>
      <div>Attacks Page</div>
      <AttackList attacks={ attacks } />
      <Switch> {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
        <Route path={`${match.url}/new`} component={PetsNew} />
        <Route path={`${match.url}/:petId`} component={PetsShow}/>

        <Route exact path={match.url} render={() => (
          <h3>Please select a Pet from the list.</h3>
        )}/>
      </Switch>
     </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    attacks: state.attackPatterns
  };
}

export default connect(mapStateToProps, { fetchAttackPatterns })(AttacksPage);