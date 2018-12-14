import React, { Component } from 'react';
import { fetchFilters, fetchAttackPatterns, filterAttackPatterns } from '../actions';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import AttacksList from '../components/AttacksList';


class AttacksFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      datasourceFilter: null,
      platformFilter: null,
      filteredAttacks: props.attackPatterns
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
    filterAttackPatterns(this.state); // this needs to be a defined function that dispatches to reducer from the actions file
//    history.push('/pets'); // might need to use this
  }

  handleOnClick = event => {

  }

// gotta work on the filter functionality
  handleOnFilterChange = event => {
    var filter = {[event.target.name]: event.target.value}

    this.setState(
      filter
    );
debugger

    this.props.filterAttackPatterns(filter)
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

            <div name="filters"> 
              <select name="datasourceFilter" onChange={this.handleOnFilterChange} defaultValue='all'>
                <option value='all'>All</option>
                  {this.props.filters.data_sources.map(filter =>
                    <option key={filter} value={filter}>{filter}</option>
                  )}
              </select>

              <select name="platformFilter" onChange={this.handleOnFilterChange} defaultValue='all'>
                <option value='all'>All</option>
                  {this.props.filters.platforms.map(filter =>
                    <option key={filter} value={filter}>{filter}</option>
                  )}
              </select>
            </div>

          ) : (

            <div>
              Filters
            </div>

          )}
            <br></br>
        <AttacksList attacks={ this.props.attackPatterns } />
      </div>
    );
  }
};

const mapStateToProps = state => {
 debugger
 return {
  attackPatterns: state.attackPatterns,
  filters: state.filters
 };
}

export default connect(mapStateToProps, { fetchFilters, fetchAttackPatterns, filterAttackPatterns })(AttacksFilter);