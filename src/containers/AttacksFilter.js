import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterAttackPatterns } from '../actions';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class AttacksFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
//    const { addPet, history } = this.props
//    filterAttackPatterns(this.state); // this needs to be a defined function that dispatches to reducer from the actions file
//    history.push('/pets'); // might need to use this
  }

  handleOnClick = event => {

  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Filter Attack Patterns</h2>

        <form onSubmit={this.handleOnSubmit} >
            <FormGroup>
                <InputGroup>
                    <InputGroup.Button>
                        <Button type='submit' value="Filter Attack Patterns">Filter Attack Patterns</Button>
                    </InputGroup.Button>
                    <FormControl type="text" onChange={this.handleOnChange}/>
                </InputGroup>
            </FormGroup>
        </form>
      </div>
    );
  }
};

export default connect(null, { filterAttackPatterns })(AttacksFilter);