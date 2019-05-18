import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions/index';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import CommentFormContainer from './CommentFormContainer';


class AttackPatternShowContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortComments: false
    }
  }

  handleCommentSubmission = (comment) => {
    console.log('COMMENT_SUBMISSION')

    this.props.postComment(comment)
  }

  handleSortComments = () => {
  debugger
    this.setState(state => ({
      sortComments: !state.sortComments
    }))
  }

  render() {

    const { attackPattern, commentCards, references, commentCardsSortedOnContent } = this.props

    return (
      <div>
        <Panel>
          <Panel.Heading>{attackPattern.name}</Panel.Heading>
          <Panel.Body className="panelText">{attackPattern.description}
            <br></br>
            <br></br>
            <ListGroup>
              <ListGroupItem>Detection: {attackPattern.x_mitre_detection}</ListGroupItem>
              <ListGroupItem>Created: {attackPattern.created}</ListGroupItem> </ListGroup>

            {references !== undefined ? (
              <h4>References:</h4>
            ) : (
                <br></br>
              )}
            <ul className="panelText">
              {references}
            </ul>

            <CommentFormContainer id={attackPattern.id} submitComment={this.handleCommentSubmission} />

            <br></br>
            <button onClick={this.handleSortComments}>Sort comments on content</button>

            {this.state.sortComments === true ? (
              <ListGroup>
                {commentCards}
              </ListGroup>
            ) : (
                <ListGroup>
                  {commentCardsSortedOnContent}
                </ListGroup>
              )
            }

          </Panel.Body>
        </Panel>


      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const attackPattern = state.attackPatterns.patterns.find(attack => attack.id === parseInt(ownProps.match.match.params.attackId))

  let references = '';
  let commentCards = '';
  let commentCardsSortedOnContent = '';

  debugger
  if (attackPattern.external_references !== undefined || attackPattern.comments !== undefined) {

    if (attackPattern.external_references !== undefined) {
      references = attackPattern.external_references.map((reference, index) => <li key={index}>Source: {reference.source_name} | <a href={reference.url}>{reference.url}</a></li>);
    }

    // debugger
    if (attackPattern.comments !== undefined) {
      commentCards = attackPattern.comments.map((comment, index) => <ListGroupItem key={index}>Name: {comment.name}<br></br>Content: {comment.content}</ListGroupItem>)
      commentCardsSortedOnContent = attackPattern.comments.sort((a, b) => (a.content < b.content) ? -1 : (a.content > b.content) ? 1 : 0).map((comment, index) => <ListGroupItem key={index}>Name: {comment.name}<br></br>Content: {comment.content}</ListGroupItem>)
    }

    return { references, attackPattern, commentCards, commentCardsSortedOnContent, history: ownProps.match.history }
  } else {
    return { attackPattern };
  }

}

export default connect(mapStateToProps, { postComment })(AttackPatternShowContainer);

