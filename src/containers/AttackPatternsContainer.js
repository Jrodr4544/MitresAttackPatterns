import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchAttackPatterns } from '../actions/index'

import FilterContainer from './FilterContainer';
import AttackPatternShowContainer from './AttackPatternShowContainer';

import AttackList from '../components/AttacksList';
//import logo from '../mitre_attack.png'

class AttackPatternsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFilterAttackPatterns = this.handleFilterAttackPatterns.bind(this);
    this.state = {
      attackPatterns: [],
      filteredAttackPatterns: []
    };
  }

  componentDidMount() {
    // debugger
    this.props.fetchAttackPatterns().then(patterns => {
      this.setState({
        attackPatterns: patterns,
        filteredAttackPatterns: patterns
      })
    })
  }

  handleFilterAttackPatterns(filter) {
    // debugger
    // Filter based on data_sources, platforms, and input 
    const filterPatterns = this.state.attackPatterns.filter(attack =>
      (attack.x_mitre_data_sources.filter(source => source.includes(filter.datasourceFilter)).length > 1) &&
      (attack.x_mitre_platforms.filter(platform => platform.includes(filter.platformFilter)).length > 0)
    );

    const result = filterPatterns.filter(attack => Object.values(attack).flat().join('').includes(filter['inputFilter']));

    return this.setState({
      ...this.state,
      filteredAttackPatterns: result
    })

  }

  render() {
    debugger
    const { match } = this.props;

    return (
      <div>
        {/* Attacks Page Container */}

        <Switch>
          <Route exact path={`${match.url}/:attackId`} render={(match) => <AttackPatternShowContainer match={match} />} />
          <Route path={match.url} render={() => (
            <h3>Select an Attack from the list.</h3>
          )} />
        </Switch>

        <FilterContainer
          filterAttackPatterns={this.handleFilterAttackPatterns}
        />

        <AttackList
          attackPatterns={this.state.filteredAttackPatterns}
        />

      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger
  return {
    attackPatterns: state.attackPatterns.patterns,
  };
}

export default connect(mapStateToProps, { fetchAttackPatterns })(AttackPatternsContainer);