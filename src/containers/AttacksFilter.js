import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterAttackPatterns } from '../actions';

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
        {/* 
            <FormGroup>
    <InputGroup>
      <InputGroup.Button>
        <Button>Before</Button>
      </InputGroup.Button>
      <FormControl type="text" />
    </InputGroup>
  </FormGroup>
        */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleOnChange} />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Filter Attack Paterns" />
        </form>
      </div>
    );
  }
};

export default connect(null, { filterAttackPatterns })(AttacksFilter);