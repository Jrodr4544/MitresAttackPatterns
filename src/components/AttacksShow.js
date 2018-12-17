import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const AttacksShow = props => {
debugger

    return (
      <div>
        <Panel>
          <Panel.Heading>{ props.attackPattern.name }</Panel.Heading>
          <Panel.Body className="panelText">{ props.attackPattern.description }
          <br></br>
          <br></br>
          <ListGroup>
            <ListGroupItem>Detection: {props.attackPattern.x_mitre_detection}</ListGroupItem>
            <ListGroupItem>Created: {props.attackPattern.created}</ListGroupItem>
          </ListGroup>
          <h4>References:</h4>
          <ul className="panelText">
            { props.references }
          </ul>
          </Panel.Body>
        </Panel>
      </div>
    );
};

const mapStateToProps = (state, ownProps) => {
  debugger
  const attackPattern = state.attackPatterns.find(attack => attack.id === ownProps.match.params.attackId )
  debugger 

  if (attackPattern) {
    let references = attackPattern.external_references.map( ( reference, index ) => <li key={index}>Source: { reference.source_name } | <a href={ reference.url }>{ reference.url }</a></li> );

    return { references, attackPattern }
  } else {
    return { attackPattern: {} }
  }
}
  
export default connect(mapStateToProps)(AttacksShow);
