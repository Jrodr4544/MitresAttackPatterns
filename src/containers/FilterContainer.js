import React, { Component } from 'react';
import { fetchFilters, fetchAttackPatterns, filterAttackPatterns } from '../actions';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import AttacksList from '../components/AttacksList';

import DatasourceFilter from '../components/filters/datasourceFilter'
import PlatformFilter from '../components/filters/platformFilter';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      datasourceFilter: 'all',
      platformFilter: 'all'
    };
  }

  componentDidMount() {
      debugger
    this.props.fetchAttackPatterns()
    this.props.fetchFilters()
  }

  handleOnSubmit = event => {
    event.preventDefault();
    debugger
//    filterAttackPatterns(this.state); 
// This should filter the current attackPatterns 
// based on input
  }

  handleOnFilterChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  render() {
    debugger

    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <FormGroup>
              <InputGroup>
                  <InputGroup.Button>
                      <Button type='submit' value="Filter Attack Patterns">Filter Attack Patterns</Button>
                  </InputGroup.Button>
                  <FormControl name="name" type="text" onChange={this.handleOnChange}/>
              </InputGroup>
          </FormGroup>
        </form>

          { this.props.filters.data_sources !== undefined ? (

            <div name='filters'>
              <DatasourceFilter datasources={this.props.filters.data_sources} changeFilter={this.handleOnFilterChange}/>
              <PlatformFilter platforms={this.props.filters.platforms} changeFilter={this.handleOnFilterChange}/>
            </div>

          ) : (
            <div>
              Filters
            </div>

          )}
            <br></br>

        <AttacksList datasourceFilter={this.state.datasourceFilter} platformFilter={this.state.platformFilter} attacks={ this.props.attackPatterns } />

      </div>
    );
  }
};

const mapStateToProps = state => {
 debugger
 //this.setState({ filteredAttackPatterns: state.attackPatterns })

 return {
  attackPatterns: state.attackPatterns,
  filters: state.filters
 };
}

export default connect(mapStateToProps, { fetchFilters, fetchAttackPatterns, filterAttackPatterns })(FilterContainer);