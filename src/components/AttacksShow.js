import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const AttacksShow = props => {
// debugger

    return (
      <div>
        <Panel>
          <Panel.Heading>{ props.name }</Panel.Heading>
          <Panel.Body className="panelText">{ props.description }
          <br></br>
          <br></br>
          <ListGroup>
            <ListGroupItem>Detection: { props.x_mitre_detection }</ListGroupItem>
            <ListGroupItem>Created: { props.created }</ListGroupItem>
          </ListGroup>

          { props.references !== undefined ? (
            <h4>References:</h4>
          ) : (
            <br></br>
          )}
          <ul className="panelText">
            { props.references }
          </ul>
          </Panel.Body>
        </Panel>
      </div>
    );
};

const mapStateToProps = (state, ownProps) => {
  // debugger
  const attackPattern = state.attackPatterns.patterns.find(attack => attack.id === parseInt(ownProps.match.params.attackId) )

  if (attackPattern.external_references !== undefined) {
    let references = attackPattern.external_references.map( ( reference, index ) => <li key={index}>Source: { reference.source_name } | <a href={ reference.url }>{ reference.url }</a></li> );

    return { references, attackPattern }
  } else {
    return attackPattern;
  }
}
  
export default connect(mapStateToProps)(AttacksShow);
