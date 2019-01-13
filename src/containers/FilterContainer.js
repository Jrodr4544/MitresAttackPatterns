import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

import DatasourceFilter from '../components/filters/datasourceFilter'
import PlatformFilter from '../components/filters/platformFilter';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFilter: '',
      datasourceFilter: '',
      platformFilter: ''
    };
  }

  handleOnFilterChange = event => {
    // debugger
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    }, () => {
      this.props.filterAttackPatterns(this.state);
    });
  }

  handleInputChange = event => {
    // debugger
    this.setState({
      ...this.state,
      inputFilter: event.target.value
    }, () => {
      this.props.filterAttackPatterns(this.state);
    });
  }

  render() {
    // debugger

    return (
      <div>
        <form> 
          <FormGroup>
              <InputGroup>
                  <InputGroup.Button>
                      <Button type='submit' value="Filter Attack Patterns">Filter Attack Patterns</Button>
                  </InputGroup.Button>
                  <FormControl name='inputFilter' value={this.state.inputFilter} type="text" onChange={this.handleInputChange}/>
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

      </div>
    );
  }
};

const mapStateToProps = state => {
//  debugger
 return {
  filters: state.filters
 };
}

export default connect(mapStateToProps)(FilterContainer);