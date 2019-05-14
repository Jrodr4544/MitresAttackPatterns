import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class CommentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: ''
    };
  }

  handleInputChange = event => {
    // debugger
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value
    })
  }

  handleCommentSubmission = (event) => {
    event.preventDefault()

    this.setState({
      ...this.state,
      attack_pattern_id: event.target.id,
    }, () => {
      this.props.submitComment(this.state)
      this.setState({
        name: '',
        content: ''
      })

    });
  }

  render() {
    debugger
    return (
      <div>

        <form id={this.props.id} onSubmit={this.handleCommentSubmission}>
          <label>Comment</label>
          <FormGroup controlId="name" >
            <label>Name:</label>
            <FormControl type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleInputChange} />
          </FormGroup>

          <FormGroup controlId="content">
            <label>Content:</label>
            <FormControl as="textArea" type="text-area" placeholder="Enter content" value={this.state.content} onChange={this.handleInputChange} />
          </FormGroup>

          <input type="submit" value="submit" ></input>
        </form>

      </div>
    )
  }
}

export default connect(null)(CommentFormContainer);